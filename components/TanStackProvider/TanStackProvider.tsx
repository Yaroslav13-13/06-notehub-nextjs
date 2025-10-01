"use client";

import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface TanStackProviderProps {
  children: ReactNode;
  dehydratedState?: unknown;
}

const TanStackProvider: React.FC<TanStackProviderProps> = ({
  children,
  dehydratedState,
}) => {
  const [queryClient] = useState(() => new QueryClient());

  if (dehydratedState) {
    import("@tanstack/react-query").then(({ hydrate }) => {
      hydrate(queryClient, dehydratedState);
    });
  }

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanStackProvider;
