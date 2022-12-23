import Link from 'next/link';
import ConnectButton from '@/app/components/connectButton';
import MetaData from './details';

export default function CardDetails({ params }: { params: { name: string } }) {
    return (
        <div className="max-w-5xl mx-auto">
            <Link
                href="/cards"
                className="flex flex-row items-center gap-3 mb-8 no-underline"
            >
                <div className="rounded-full btn btn-outline btn-sm btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                        />
                    </svg>
                </div>
                Back to My Cards
            </Link>

            <div className="w-full max-w-2xl mx-auto">
                <MetaData cardName={params.name} />
            </div>
            <ConnectButton display={false} />
        </div>
    );
}
