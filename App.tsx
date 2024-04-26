import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StarshipFeedScreenApi } from "~/screens/StarshipFeedScreenApi";

import { Navigator } from "~/navigation/Navigator";
import { NetworkProvider } from 'react-native-offline';

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
