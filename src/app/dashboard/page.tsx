'use client';
import { useWalletConnector } from '@/app/components/useWallet';

export default function Dashboard() {
    const { account, balance, connect } = useWalletConnector();

    return (
        <div className="text-white">
            <div className="mb-8">
                <p>{`Connected Address: ${account ? account : ''}`}</p>
                <p>{`Balance: ${balance ? balance : ''}`}</p>
            </div>

            {account ? (
                <div>
                    <p>Link somewhere</p>
                </div>
            ) : (
                <button
                    className="rounded border border-blue-500 bg-transparent from-cyan-500 to-blue-500 py-2 px-4 font-semibold text-white hover:bg-gradient-to-r"
                    onClick={connect}
                >
                    Connect
                </button>
            )}
        </div>
    );
}
