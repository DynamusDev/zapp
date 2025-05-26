import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./app/navigation";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
