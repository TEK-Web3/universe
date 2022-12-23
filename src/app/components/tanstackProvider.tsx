'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

export default function TanstackProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="en" data-theme={'business'}>
                <head />
                <body>
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                </body>
            </html>
        </>
    );
}
