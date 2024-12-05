// Components (Internal)
import { FiltersModal } from "./components/FiltersModal";
import { TransactionTypeDropdown } from "./components/TransactionTypeDropdown";
// Internal Components
import { NewTransactionModal } from "./components/NewTransaction";
import { TransactionCard } from "./components/TransactionCard";
// Components
import { Spinner } from "../../../../shared/components/Spinner";
import { SwiperOptions } from "../../../../shared/components/SwiperOption";
// Controllers
import { useTransactionsController } from "./useTransactionsController";
// Assets
import emptyState from "../../../../shared/assets/images/empty-state.svg";
// Config
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { MONTHS } from "../../../../core/config/constants";
import { TransactionDetailsModal } from "./components/TransactionDetailsModal";

export function Transactions() {
  const {
    filters,
    handleChangeFilter,
    //
    isLoading,
    transactions,
    isInitialLoading,
    areValuesVisible,
    // Swiper month
    handleSliderState,
    // Filters modal
    showFiltersModal,
    handleShowFiltersModal,
    handleCloseFilterModal,
    //
    transactionBeingEdited,
  } = useTransactionsController();

  const loadingComponent = (
    <div className="flex flex-1 justify-center items-center my-10">
      <Spinner className="fill-red-900 text-gray-100" />
    </div>
  );

  return (
    <div className="w-full flex flex-col rounded-2xl py-6 px-3 md:p-10 md:h-full text-gray-900 bg-gray-100 overflow-visible">
      <NewTransactionModal />

      {transactionBeingEdited && <TransactionDetailsModal />}

      {!isInitialLoading && (
        <>
          <FiltersModal
            open={showFiltersModal}
            onClose={() => handleCloseFilterModal()}
            // filters
            year={filters.year}
            bankAccountId={filters.bankAccountId}
            onApply={(bankAccountId, year) => {
              handleChangeFilter("year")(year);
              handleChangeFilter("bankAccountId")(bankAccountId);

              handleCloseFilterModal();
            }}
          />

          <header className="block">
            <div className="flex justify-between items-center mb-4">
              <TransactionTypeDropdown
                value={filters.type}
                onSelect={(value) => handleChangeFilter("type")(value)}
              />

              <button onClick={() => handleShowFiltersModal()}>
                <MixerHorizontalIcon />
              </button>
            </div>

            {/* Filter by month */}
            <SwiperOptions
              slidesPerView={3}
              options={MONTHS}
              initialSlide={filters.month}
              setState={({ isBeginning, isEnd, selected, index }) => {
                if (index === filters.month) return;

                handleSliderState(isBeginning, isEnd);

                handleChangeFilter("month")(selected);
              }}
            />
          </header>

          {isLoading && loadingComponent}

          {!isLoading && (
            <div className="mt-4 space-y-3 flex-1 md:overflow-y-auto overflow-visible">
              {transactions.map((transaction) => {
                return (
                  <TransactionCard
                    key={transaction.id}
                    transaction={transaction}
                    showBalance={areValuesVisible}
                  />
                );
              })}

              {transactions.length < 1 && (
                <div className="h-full flex flex-col justify-center items-center py-8">
                  <img
                    src={emptyState}
                    alt="woman using magnifying glass"
                    className="mb-2"
                  />

                  <span className="text-sm md:text-base text-gray-700">
                    Nenhuma transação feita nesse período
                  </span>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Only First Get */}
      {isInitialLoading && loadingComponent}
    </div>
  );
}
