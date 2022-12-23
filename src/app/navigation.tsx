import Link from 'next/link';

export default function Navigation() {
    return (
        <div className="shadow navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="text-xl normal-case btn btn-ghost">
                    GUCV (GU Cards Viewer)
                </Link>
            </div>
            <div className="flex-none gap-4">
                <Link href="/cards" className="normal-case rounded btn btn-ghost">
                    My Cards
                </Link>
            </div>
        </div>
    );
}
