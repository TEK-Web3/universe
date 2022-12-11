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
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar placeholder"
                    >
                        <div className="w-12 bg-base-200 text-black dark:text-white rounded-full">
                            <span>ES</span>
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-200 rounded-box w-52"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
