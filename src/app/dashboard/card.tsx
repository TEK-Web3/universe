import Image from 'next/image';
import Link from 'next/link';
import { Card as CardType } from 'server/models/card';

export default function Card(props: CardType) {
    return (
        <div className="flex flex-col items-center">
            <h3>{props.name}</h3>
            <Image src={props.image_url} width={200} height={300} alt={props.name} />
            <Link
                href={`/cards/${props.name.replace(/ /g, '-').toLowerCase()}`}
                className="btn text-action capitalize btn-ghost"
            >
                view more
            </Link>
        </div>
    );
}
