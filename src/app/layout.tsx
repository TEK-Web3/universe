import TanstackProvider from '@/app/components/tanstackProvider';
import { EthersProvider } from '@/app/components/metaMaskProvider';
import '@/styles/globals.css';
import Navigation from '@/app/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <EthersProvider>
            <TanstackProvider>
                <Navigation />
                <div className="prose w-full w-min-none max-w-none p-8">{children}</div>
            </TanstackProvider>
        </EthersProvider>
    );
}
