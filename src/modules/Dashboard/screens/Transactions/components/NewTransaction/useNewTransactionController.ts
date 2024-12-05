import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
// to Form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// Hooks
import { useTransactions } from "../../hooks/useTransactions";
// Service
import { transactionService } from "../../service/@index";
// Utils
import { useState } from "react";
import { usersService } from "../../../../../../core/services/users/@index";
import { currencyToNumber } from "../../../../../../core/utils/currencyToNumber";
import { LABEL_ERRORS } from "../../../../../../core/utils/labelErrors";
import { useBankAccounts } from "../../../Account/hooks/useBankAccounts";

const schema = z.object({
  bankAccountId: z.string({ required_error: LABEL_ERRORS.EMPTY }).nonempty(LABEL_ERRORS.EMPTY),
  name: z.string({ required_error: LABEL_ERRORS.EMPTY }).nonempty(LABEL_ERRORS.EMPTY),
  value: z.union([
    z.number({ required_error: LABEL_ERRORS.EMPTY }).nonnegative(LABEL_ERRORS.INVALID_NUMBER),
    z.string({ required_error: LABEL_ERRORS.EMPTY }).nonempty(LABEL_ERRORS.EMPTY),
  ]),
  paymentType: z.string({ required_error: LABEL_ERRORS.EMPTY }).nonempty(LABEL_ERRORS.EMPTY),
  date: z.date({ required_error: LABEL_ERRORS.EMPTY }),
  document: z.string({ required_error: LABEL_ERRORS.EMPTY }).nonempty(LABEL_ERRORS.EMPTY),
  favoredName: z.string({ required_error: LABEL_ERRORS.EMPTY }).nonempty(LABEL_ERRORS.EMPTY),
  bank: z.string({ required_error: LABEL_ERRORS.EMPTY }).nonempty(LABEL_ERRORS.EMPTY),
  agency: z.string({ required_error: LABEL_ERRORS.EMPTY }).nonempty(LABEL_ERRORS.EMPTY),
  account: z.string({ required_error: LABEL_ERRORS.EMPTY }).nonempty(LABEL_ERRORS.EMPTY),
  pixKey: z.string({ required_error: LABEL_ERRORS.EMPTY }).nonempty(LABEL_ERRORS.EMPTY),
});

type FormData = z.infer<typeof schema>;

export function useNewTransactionController() {
  const queryClient = useQueryClient();
  //
  const [userPassword, setUserPassword] = useState<string>("");
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  //
  const {
    newTransactionType,
    showNewTransactionModal,
    closeNewTransactionModal,
  } = useTransactions();
  //
  const { data: bankAccounts } = useBankAccounts();
  //
  const isExpense = newTransactionType === "EXPENSE";

  const {
    control,
    reset,
    trigger,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: new Date(),
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["transactions", "create"],
    mutationFn: async (params: FormData) => {
      const payload = {
        ...params,
        type: newTransactionType,
        value: currencyToNumber(params.value),
      };
      await transactionService.create(payload);
    },
  });

  const validatePassword = async () => {
    try {
      const passwordIsValid = await usersService.validatePassword(userPassword);

      if(passwordIsValid) {
        await handleCreateTransaction();
      } else {
        toast.error("Senha inválida. Tente novamente.");
      }
    } catch (error) {
      toast.error("Senha inválida. Tente novamente.");
    }
  };

  const handleOpenPasswordModal = async () => {
    closeNewTransactionModal();

    const isValid = await trigger();

    if (isValid) {
      setPasswordModalOpen(true);
    }
  };

  const handleCreateTransaction = handleSubmit(async (data) => {
    try {
      await mutateAsync(data);

      reset({
        name: "",
        value: "",
        bankAccountId: "",
        date: new Date(),
      });

      closeNewTransactionModal();

      queryClient.invalidateQueries({ queryKey: ["transactions", "get-all"] });

      toast.success(
        `${isExpense ? "Despesa" : "Receita"} criada com sucesso.`
      );

      setPasswordModalOpen(false);
    } catch (error) {
      toast.error("Erro ao criar transação.");
    }
  });

  return {
    errors,
    control,
    bankAccounts,
    passwordModalOpen,
    newTransactionType,
    isLoading: isPending,
    showNewTransactionModal,
    //
    register,
    setUserPassword,
    validatePassword,
    setPasswordModalOpen,
    closeNewTransactionModal,
    handleOpenPasswordModal,
  };
}
