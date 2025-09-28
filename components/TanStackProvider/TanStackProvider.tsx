"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

interface TanStackProviderProps {
  children: ReactNode;
  dehydratedState?: unknown;
}

const TanStackProvider: React.FC<TanStackProviderProps> = ({
  children,
  dehydratedState,
}) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration state={dehydratedState}>
        {children}
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
};

export default TanStackProvider;
