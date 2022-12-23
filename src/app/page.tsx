import Link from 'next/link';

export default function Home() {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row bg-neutral-900">
                <div className="flex flex-col w-full lg:w-1/3">
                    <h1 className="text-7xl">
                        <span className="block xl:inline bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-green-500 to-indigo-500 animate-text">
                            Gods Unchained Card Viewer
                        </span>
                    </h1>
                    <h2 className="mt-0">
                        Unleash the full power of your deck with our Gods Unchained NFT
                        card viewer - the ultimate tool for collectors and players alike.
                    </h2>
                    <Link
                        className="btn btn-primary btn-lg mt-8 w-fit no-underline hidden lg:flex"
                        href={'/cards'}
                    >
                        See My Cards
                    </Link>
                </div>

                <div className="w-full lg:w-2/3">
                    <img src="/landing.png" alt="hero" />
                </div>
            </div>
            <Link
                className="btn btn-primary btn-lg mt-8 w-full no-underline lg:hidden"
                href={'/cards'}
            >
                See My Cards
            </Link>
        </div>
    );
}
