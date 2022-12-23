'use client';
import { useWalletConnector } from '@/app/components/useWallet';
import { useQuery } from '@tanstack/react-query';
import imxClient, { AssetWithOrders } from '@/app/components/imxClient';
import Card from './card';

export default function CardContainer() {
    const { account } = useWalletConnector();
    console.log(account, 'account');
    const { data: cards, isLoading } = useQuery(
        ['cards'],
        async () => {
            const { getGods } = await imxClient();
            const response = await getGods(account as string);
            return response.result.filter(
                asset =>
                    asset.token_address === '0xacb3c6a43d15b907e8433077b6d38ae40936fe2c'
            );
        },
        {
            enabled: Boolean(account),
        }
    );

    if (!cards) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((c: AssetWithOrders) => (
                <Card key={c.id} {...c} />
            ))}
        </div>
    );
}
