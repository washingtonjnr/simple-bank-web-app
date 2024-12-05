// Components
import { Input } from "../../../../../../shared/components/Input";
import { InputCurrency } from "../../../../../../shared/components/Input/types/Currency";
import { InputDatePicker } from "../../../../../../shared/components/Input/types/DatePicker";
import { Modal } from "../../../../../../shared/components/Modal";
import { Select } from "../../../../../../shared/components/Select";
// Controllers
import { useEditTransactionController } from "./useEditTransactionController";

export function TransactionDetailsModal() {
  const {
    transaction,
    newTransactionType,
    showEditTransactionModal,
    closeEditTransactionModal,
  } = useEditTransactionController();
  //
  const isExpense = newTransactionType === "EXPENSE";

  return (
    <Modal
      open={showEditTransactionModal}
      title={isExpense ? "Detalhes da transação" : "Detalhes da receita"}
      onClose={closeEditTransactionModal}
    >
      <form className="text-left">
        <div className="flex flex-col gap-4">
          {/* Valor */}
          <div className="flex justify-center items-center gap-2">
            <small className="text-gray-600 tracking-[-0.5px] text-lg">
              R$
            </small>
            <InputCurrency
              isDisabled
              placeholder="0,00"
              value={transaction.value}
            />
          </div>

          {/* Nome da transação ou receita */}
          <Input
            readOnly
            placeholder={isExpense ? "Nome da transação" : "Nome da receita"}
            value={transaction.name}
          />

          {/* Tipo de pagamento */}
          <Select
            isDisabled
            placeholder="Tipo de pagamento"
            options={["PIX", "TED"].map((paymentType) => ({
              value: paymentType,
              label: paymentType,
            }))}
            value={transaction.paymentType}
          />

          {/* CPF ou CNPJ */}
          <Input
            readOnly
            placeholder="CPF ou CNPJ"
            value={transaction.document}
          />

          {/* Nome do favorecido */}
          <Input
            readOnly
            placeholder="Nome do favorecido"
            value={transaction.favoredName}
          />

          {/* Banco */}
          <Input readOnly placeholder="Banco" value={transaction.bank} />

          {/* Agência */}
          <Input readOnly placeholder="Agência" value={transaction.agency} />

          {/* Conta */}
          <Input readOnly placeholder="Conta" value={transaction.account} />

          {/* Chave Pix */}
          <Input readOnly placeholder="Chave Pix" value={transaction.pixKey} />

          {/* Data */}
          <InputDatePicker
            isDisabled
            currentValue={transaction.date}
            onChange={() => {}}
          />
        </div>
      </form>
    </Modal>
  );
}
