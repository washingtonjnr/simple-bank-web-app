import { Controller } from "react-hook-form";
// Components
import { Button } from "../../../../../../shared/components/Button";
import { Input } from "../../../../../../shared/components/Input";
import { InputCurrency } from "../../../../../../shared/components/Input/types/Currency";
import { InputDatePicker } from "../../../../../../shared/components/Input/types/DatePicker";
import InputDocument from "../../../../../../shared/components/Input/types/Document";
import { Modal } from "../../../../../../shared/components/Modal";
import { Select } from "../../../../../../shared/components/Select";
// H
import { PAYMENT_TYPES } from "../../../../../../core/config/constants";
import { InputPassword } from "../../../../../../shared/components/Input/types/Password";
import { useNewTransactionController } from "./useNewTransactionController";

export function NewTransactionModal() {
  const {
    errors,
    control,
    isLoading,
    bankAccounts,
    passwordModalOpen,
    newTransactionType,
    showNewTransactionModal,
    register,
    setUserPassword,
    validatePassword,
    setPasswordModalOpen,
    handleOpenPasswordModal,
    closeNewTransactionModal,
  } = useNewTransactionController();

  const isExpense = newTransactionType === "EXPENSE";

  return (
    <>
      <Modal
        open={passwordModalOpen}
        title="Informe sua senha"
        onClose={() => setPasswordModalOpen(false)}
      >
        <form
          className="text-left flex flex-col justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            validatePassword();
          }}
        >
          <InputPassword
            type="password"
            name="confirm-password"
            placeholder="Digite sua senha"
            onChange={(e) => setUserPassword(e.target.value)}
          />

          <Button className="mt-4" isLoading={isLoading}>
            Validar
          </Button>
        </form>
      </Modal>

      <Modal
        open={showNewTransactionModal}
        title={isExpense ? "Nova transação" : "Nova receita"}
        onClose={closeNewTransactionModal}
      >
        <form
          className="text-left"
          onSubmit={(e) => {
            e.preventDefault();
            handleOpenPasswordModal();
          }}
        >
          <small className="text-gray-600 tracking-[-0.5px] text-xs">
            Valor da {isExpense ? "transação" : "receita"}
          </small>

          <div className="flex justify-center items-center gap-2">
            <small className="text-gray-600 tracking-[-0.5px] text-lg">
              R$
            </small>

            <Controller
              control={control}
              name="value"
              render={({ field: { value, onChange } }) => (
                <InputCurrency
                  placeholder="0,00"
                  value={value}
                  onChange={onChange}
                  error={errors.value?.message}
                />
              )}
            />
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <Input
              placeholder={isExpense ? "Nome da transação" : "Nome da receita"}
              {...register("name")}
              error={errors.name?.message}
            />

            <Controller
              control={control}
              name="bankAccountId"
              render={({ field: { value, onChange } }) => (
                <Select
                  placeholder="Pagar com"
                  options={bankAccounts.map(({ id, name }) => ({
                    value: id,
                    label: name,
                  }))}
                  value={value}
                  onChange={onChange}
                  error={errors.bankAccountId?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="paymentType"
              render={({ field: { value, onChange } }) => (
                <Select
                  placeholder="Tipo de pagamento"
                  options={PAYMENT_TYPES.map((paymentType) => ({
                    value: paymentType,
                    label: paymentType,
                  }))}
                  value={value}
                  onChange={onChange}
                  error={errors.paymentType?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="document"
              render={({ field: { value, onChange } }) => (
                <InputDocument
                  value={value}
                  onChange={onChange}
                  placeholder="CPF ou CNPJ"
                  error={errors.document?.message}
                />
              )}
            />

            <Input
              placeholder="Nome do favorecido"
              {...register("favoredName")}
              error={errors.favoredName?.message}
            />

            <Input
              placeholder="Banco"
              {...register("bank")}
              error={errors.bank?.message}
            />

            <Input
              placeholder="Agência"
              {...register("agency")}
              error={errors.agency?.message}
            />

            <Input
              placeholder="Conta"
              {...register("account")}
              error={errors.account?.message}
            />

            <Input
              placeholder="Chave Pix"
              {...register("pixKey")}
              error={errors.pixKey?.message}
            />

            <Controller
              control={control}
              name="date"
              defaultValue={new Date()}
              render={({ field: { value, onChange } }) => (
                <InputDatePicker onChange={onChange} currentValue={value} />
              )}
            />

            <Button className="mt-4" isLoading={isLoading}>
              Criar
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
