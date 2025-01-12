import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router";

import { queryClient } from "./query-client";

export const DefaultRouterProvider = () => (
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
            <Outlet />
    </QueryClientProvider>
);