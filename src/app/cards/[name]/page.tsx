import Link from 'next/link';

export default async function CardDetails({ params }: { params: { name: string } }) {
    const details = await (
        await fetch(`http://localhost:3000/api/cards?name=${params.name}`)
    ).json();

    return (
        <div className="max-w-5xl mx-auto">
            <Link href="/dashboard" className="btn btn-outline rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                </svg>
            </Link>
            <code>{JSON.stringify(details)}</code>
        </div>
    );
}
