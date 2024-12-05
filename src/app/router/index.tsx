import { BrowserRouter, Route, Routes } from "react-router-dom";
// Auth
import { AuthGuard } from "./AuthGuard";
// Layouts
import { AuthLayout } from "../../shared/layouts/AuthLayout";
import { DashLayout } from "../../shared/layouts/DashLayout";
// Views
import { Dashboard } from "../../modules/Dashboard";
import { Login } from "../../modules/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>

        {/* Dashboard */}
        <Route element={<AuthGuard isPrivate />}>
          <Route element={<DashLayout />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
