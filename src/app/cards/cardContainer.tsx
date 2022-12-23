'use client';
import { useQuery } from '@tanstack/react-query';
import { AssetWithOrders } from '@/app/components/imxClient';
import Card from './card';
import { useWallet } from '../hooks/useWallet';
import { getCards } from '@/server/getCards';

export default function CardContainer() {
    const { account } = useWallet();
    const { data: cards, isFetching } = useQuery(
        ['cards'],
        async () => getCards(account ?? ''),
        {
            enabled: Boolean(account),
        }
    );

    if (!cards) return null;

    if (isFetching) return <div>Loading...</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((c: AssetWithOrders) => (
                <Card key={c.id} {...c} />
            ))}
        </div>
    );
}
