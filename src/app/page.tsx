export default function Home() {
    return (
        <div className="flex flex-wrap-reverse bg-neutral-900 bg-gradient-to-br text-white overflow-hidden">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-20 lg:w-100">
                <div className="mt-10 relative">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">
                        <div className="relative">
                            <h1 className="text-2xl tracking-tight font-extrabold sm:text-5xl md:text-7xl">
                                <span className="block xl:inline bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-green-500 to-indigo-500 animate-text">
                                    Gods Unchained Card Viewer
                                </span>
                            </h1>
                            <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-gray-300">
                                Unleash the full power of your deck with our Gods
                                Unchained NFT card viewer - the ultimate tool for
                                collectors and players alike.
                            </p>
                        </div>
                        <div className="relative">
                            <div>
                                <div className="lg:relative md:relative lg:w-[170%]">
                                    <img
                                        className="w-full md:relative"
                                        style={{ display: 'block' }}
                                        src="/landing.png"
                                        alt="hero-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </dl>
                </div>
            </main>
        </div>
    );
}
