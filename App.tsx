import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Navigator } from "~/navigation/Navigator";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </QueryClientProvider>
  );
}
