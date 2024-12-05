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
  const {
    newTransactionType,
    showNewTransactionModal,
    closeNewTransactionModal,
  } = useTransactions();
  // Although the Accounts component makes the same call, it will not be redone.
  const {
    data: bankAccounts,
    isFetching: isFetchingBankAccounts,
  } = useBankAccounts();
  const isExpense = newTransactionType === "EXPENSE";

  const {
    reset,
    register,
    control,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["transactions", "create"],
    mutationFn: async (params: FormData) => {
      if(!newTransactionType) return null;

      const payload = {
        ...params,
        type: newTransactionType,
        value: currencyToNumber(params.value),
      }
      await transactionService.create(payload);
    }
  });

  const handleCreateTransaction = handleFormSubmit(async(data) => {
    try {
      // Calling
      await mutateAsync(data);

      // Close and reset modal
      reset({
        name: "",
        value: "",
        bankAccountId: "",
        date: new Date(),
      });

      closeNewTransactionModal();

      toast.success(`${isExpense ? "Expense" : "Income"} transaction created successfully`);

      queryClient.invalidateQueries({ queryKey: ["transactions", "get-all"] });
      queryClient.invalidateQueries({ queryKey: ["bank-accounts", "get-all"] });
    } catch (error) {
      toast.error(`${error}`);
    }
  });

  return {
    bankAccounts,
    isFetchingBankAccounts,
    //
    errors,
    register,
    control,
    isLoading: isPending,
    handleCreateTransaction,
    //
    newTransactionType,
    showNewTransactionModal,
    closeNewTransactionModal,
  };
}
