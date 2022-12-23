'use client';
import { useWalletConnector } from '@/app/components/useWallet';

export default function ConnectButton() {
    const { account, connect } = useWalletConnector();

    if (account) {
        return (
            <div>
                <p>Show the card</p>
            </div>
        );
    }

    return (
        <button className="btn btn-primary" onClick={connect}>
            Connect
        </button>
    );
}
