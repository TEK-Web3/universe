'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useReadLocalStorage } from 'usehooks-ts';

const queryClient = new QueryClient();

export default function TanstackProvider({ children }: { children: React.ReactNode }) {
    const theme = useReadLocalStorage('theme');
    return (
        <>
            <html lang="en" data-theme={theme ?? 'business'}>
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
