import ThemeSwitcher from '@/app/components/themeSwitcher';
import Link from 'next/link';

export default function Navigation() {
    return (
        <div className="navbar bg-base-100 shadow">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                    TEK Cards
                </Link>
            </div>
            <div className="flex-none gap-4">
                <Link href="/dashboard" className="btn btn-ghost normal-case rounded">
                    Dashboard
                </Link>
                <ThemeSwitcher />
            </div>
        </div>
    );
}
