// Components
import { Button } from "../../../../../../shared/components/Button";
import { Modal } from "../../../../../../shared/components/Modal";
import { SwiperOptions } from "../../../../../../shared/components/SwiperOption";
// Config
import { YEAR } from "../../../../../../core/config/constants";
// Controllers
import { useFiltersModalController } from "./useFiltersModalController";
// Utils
import { cn } from "../../../../../../core/utils/cn";

type FiltersModalProps = {
  open: boolean;
  onClose(): void;
  //
  year?: number;
  bankAccountId?: string;
  onApply(bankAccountId: string | undefined, year: number): void;
};

export function FiltersModal({
  year,
  open,
  onClose,
  onApply,
}: FiltersModalProps) {
  const {
    accounts,
    //
    selectedYear,
    selectedBankAccountId,
    handleSelectBankAccountId,
    //
    handleSliderState,
  } = useFiltersModalController();

  return (
    <Modal open={open} title="Filtro" onClose={onClose}>
      <div className="text-gray-800">
        <p className="text-base md:text-lg tracking-[-0.5px] font-bold">
          Conta
        </p>

        <div className="flex flex-col gap-2 mt-2">
          {accounts.map(({ id, name }) => {
            return (
              <button
                key={id}
                className={cn(
                  "text-left outline-none p-2 rounded-2xl hover:bg-gray-100 transition-colors",
                  id === selectedBankAccountId && "!bg-gray-200"
                )}
                onClick={() => handleSelectBankAccountId(id)}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-base md:text-lg tracking-[-0.5px] font-bold">Ano</p>

        <SwiperOptions
          slidesPerView={1}
          initialSlide={year}
          options={YEAR.map((y) => ({ alias: y, label: y }))}
          setState={({ isBeginning, isEnd, selected, index }) => {
            if (index === selectedYear) return;

            handleSliderState(isBeginning, isEnd, YEAR[selected]);
          }}
        />
      </div>

      <Button
        className="mt-8 w-full"
        onClick={() => onApply(selectedBankAccountId, selectedYear)}
      >
        Aplicar filtros
      </Button>
    </Modal>
  );
}
