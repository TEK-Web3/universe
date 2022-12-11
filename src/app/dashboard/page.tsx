import Card from './card';

export default async function Dashboard() {
    const cards = await (await fetch('http://localhost:3000/api/cards')).json();
    return (
        <div className="max-w-5xl mx-auto">
            <h1>Logged in Dashboard Page</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cards.map((card: any) => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </div>
    );
}
