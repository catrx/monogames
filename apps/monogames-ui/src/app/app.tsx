import { Link } from 'react-router-dom';
import { AppRoutes } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/header";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <div className="container mx-auto">
          <AppRoutes />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
