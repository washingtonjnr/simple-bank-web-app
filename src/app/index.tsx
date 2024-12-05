import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// Components
import { Toaster } from "react-hot-toast";
// Contexts
import { AuthProvider } from "../core/contexts/Auth";
// Styles
import "../shared/styles/index.css";
// Styles
import "swiper/css";
//
import Router from "./router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Context */}
      <AuthProvider>
        {/* Routes */}
        <Router />

        {/* Alert */}
        <Toaster />
      </AuthProvider>

      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}
