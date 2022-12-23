import TanstackProvider from '@/app/components/tanstackProvider';
import { EthersProvider } from '@/app/components/metaMaskProvider';
import '@/styles/globals.css';
import Navigation from '@/app/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="business">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <EthersProvider>
                    <TanstackProvider>
                        <Navigation />
                        <div className="w-full p-8 prose w-min-none max-w-none">
                            {children}
                        </div>
                    </TanstackProvider>
                </EthersProvider>
            </body>
        </html>
    );
}
