'use client';
import { ethers } from 'ethers';
import { useCallback, useEffect } from 'react';
import { useWallet } from '../hooks/useWallet';
import { useGetEthersProviderContext } from '@/app/components/metaMaskProvider';
import Image from 'next/image';

export default function ConnectButton({ display = true }: { display?: boolean }) {
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

    if (account || display === false) return null;

    return (
        <div className="flex flex-col items-center w-full h-full gap-3 text-center justfy-center">
            {provider ? (
                <>
                    <Image
                        src="/metamask.png"
                        width={150}
                        height={150}
                        alt="metamask logo"
                    />
                    <p className="mt-0">
                        Connect with your MetaMask wallet to see your cards.
                    </p>
                    <button className="btn btn-primary" onClick={connect}>
                        Connect With MetaMask
                    </button>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <Image
                        alt="loading metamask"
                        src="/loading.svg"
                        width="100"
                        height="100"
                    />
                    <h3>Locating your MetaMask Provider</h3>
                    <p className="text-sm text-white/30">
                        This site requires you to have a MetaMask account.
                    </p>
                </div>
            )}
        </div>
    );
}
