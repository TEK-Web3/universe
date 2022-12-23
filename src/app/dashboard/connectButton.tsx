'use client';
import { ethers } from 'ethers';
import { useCallback, useEffect } from 'react';
import { useWallet } from '../hooks/useWallet';
import { useGetEthersProviderContext } from '@/app/components/metaMaskProvider';

export default function ConnectButton() {
    const { account } = useWallet();
    const { provider } = useGetEthersProviderContext();

    const checkConnection = useCallback(
        async (provider: ethers.providers.Web3Provider) => {
            const accounts = await provider.listAccounts();

            if (accounts.length) {
                provider
                    .send('eth_requestAccounts', [])
                    .then((accounts: string | any[]) => {
                        if (accounts.length > 0) {
                            useWallet.setState({ account: accounts[0] });
                            useWallet.setState({ isConnected: true });
                        }
                    })
                    .catch((error: Error) => {
                        console.log(error);
                    });
            }
        },
        []
    );

    useEffect(() => {
        if (provider) {
            checkConnection(provider);
        }
    }, [provider, checkConnection]);

    useEffect(() => {
        if (!account || !ethers.utils.isAddress(account)) {
            return;
        }

        if (provider) {
            provider
                .getBalance(account)
                .then(balance => {
                    useWallet.setState({ balance: ethers.utils.formatEther(balance) });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [account, provider]);

    const connect = () => {
        if (provider) {
            provider
                .send('eth_requestAccounts', [])
                .then(accounts => {
                    if (accounts.length > 0) {
                        useWallet.setState({ account: accounts[0] });
                        useWallet.setState({ isConnected: true });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

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
