import { useLayoutEffect, useState } from 'react';

export default function StatBar({ color, value }: { color: string; value: number }) {
    const [percentage, setPercentage] = useState(100);

    useLayoutEffect(() => {
        const timeout = setTimeout(() => {
            setPercentage((value / 17) * 100);
        }, 10);

        return () => clearTimeout(timeout);
    }, [value]);

    return (
        <div className="relative flex flex-1 w-full h-4 overflow-hidden bg-transparent border border-gray-500 rounded">
            <span
                className={`transition-all duration-1000 ease-out h-full ${
                    color ? color : 'bg-accent'
                }`}
                style={{ width: `${percentage}%` }}
            />

            <span className="absolute -ml-6 text-xs w-fit left-1/2">{value} / 17</span>
        </div>
    );
}
