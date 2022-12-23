export default function StatBar({ color, value }: { color: string; value: number }) {
    const percentage = (value / 17) * 100;

    return (
        <div className="relative flex flex-1 w-full h-4 bg-transparent border border-gray-500 rounded">
            <span
                className={`h-full rounded ${color ? color : 'bg-accent'}`}
                style={{ width: `${percentage}%` }}
            />

            <span className="absolute -ml-6 text-xs w-fit left-1/2">{value} / 17</span>
        </div>
    );
}
