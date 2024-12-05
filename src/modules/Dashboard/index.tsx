// Components (Internal)
import { Fab } from "./components/Fab";
import { DashboardProvider } from "./context/Dashboard";
// Screens
import { Account } from "./screens/Account";
import { AccountProvider } from "./screens/Account/context/Account";
import { Transactions } from "./screens/Transactions";
import { TransactionProvider } from "./screens/Transactions/context/Transactions";

export function Dashboard() {
  return (
    <DashboardProvider>
      <AccountProvider>
        <TransactionProvider>
          <article className="md:w-1/2 md:h-full">
            <Account />
          </article>

          <aside className="md:w-1/2 md:h-full max-h-full">
            <Transactions />
          </aside>

          {/* Botão flutuante */}
          <Fab />
        </TransactionProvider>
      </AccountProvider>
    </DashboardProvider>
  );
}
