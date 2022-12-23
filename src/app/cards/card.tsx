import Image from 'next/image';
import Link from 'next/link';
import type { AssetWithOrders } from '@/app/components/imxClient';

export default function Card({ name, image_url }: AssetWithOrders) {
    return (
        <div className="flex flex-col items-center">
            <h3>{name}</h3>
            <Image
                src={image_url as string}
                width={300}
                height={500}
                alt={name as string}
            />
            <Link
                href={`/cards/${(name as string).replace(/ /g, '-').toLowerCase()}`}
                className="mt-2 rounded btn btn-ghost underline-none"
            >
                view more
            </Link>
        </div>
    );
}
