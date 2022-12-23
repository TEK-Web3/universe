'use client';

import { useWallet } from '@/app/hooks/useWallet';
import { getCards } from '@/server/getCards';
import type { MetaData as MetaDataType } from '@/server/models/card';
import { AssetWithOrders } from '@imtbl/core-sdk';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import StatBar from './statBar';

export default function MetaData({ cardName }: { cardName: string }) {
    const { account } = useWallet();
    const { data: cards } = useQuery(['cards'], async () => getCards(account ?? ''), {
        enabled: Boolean(account),
    });

    if (!cards) return null;

    // filter the cards until the name matches with the cardName
    const card: AssetWithOrders = cards.filter(
        (c: any) => c.name.replace(/ /g, '-').toLowerCase() === cardName
    )[0];

    const metaData = card?.metadata as MetaDataType;

    const bars = [
        { name: 'Health', color: 'bg-success', value: metaData?.health ?? 0 },
        { name: 'Mana', color: 'bg-info', value: metaData?.mana ?? 0 },
        { name: 'Attack Power', color: 'bg-warning', value: metaData?.attack ?? 0 },
    ];

    const { proto, type, effect, image, mana, attack, health, name, ...rest } = metaData;
    const attributes = Object.entries(rest);

    return (
        <>
            <div className="flex flex-col gap-5 md:flex-row">
                <div className="flex mx-auto w-fit h-fit">
                    <Image
                        src={card.image_url as string}
                        alt={card.name as string}
                        width={300}
                        height={500}
                    />
                </div>

                <div className="flex flex-col flex-1 gap-2">
                    <h2 className="m-0">{card.name}</h2>
                    <p>{card?.description ?? metaData.effect}</p>
                    {bars.map((bar, idx) => {
                        if (bar.value === 0) return null;
                        return (
                            <div key={`statbar-${idx}`}>
                                <label className="text-sm">{bar.name}</label>
                                <StatBar color={bar.color} value={bar.value} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <table className="table w-full table-zebra">
                <thead>
                    <tr>
                        <th align="center">Attribute</th>
                        <th align="center">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {attributes.map(([name, value], idx) => {
                        return (
                            <tr key={`table-data-${idx}`}>
                                <td align="center" className="capitalize">
                                    {name}
                                </td>
                                <td align="center" className="capitalize">
                                    {value}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
