import TanstackProvider from '@/app/components/tanstackProvider';
import '@/styles/globals.css';
import Navigation from '@/app/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <TanstackProvider>
            <Navigation />
            <div className="prose w-full w-min-none max-w-none p-8">{children}</div>
        </TanstackProvider>
    );
}
