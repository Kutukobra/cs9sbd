import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useEffect, useState } from "react";

function Sidebar() {

    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
        console.log(user);
    }, [])

    const handleLogout = () => {
        setUser(null);
        localStorage.clear();
    }

    return (
        <aside className="fixed z-40 w-1/4 float-left left-0 h-screen justify-between border-e border-gray-100 bg-white overflow-hidden">
            <div className="px-4 py-6">
                <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                    Toko Amazing
                </span>

                <ul className="mt-6 space-y-1">
                <li>
                    <Link
                    to="/"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                    Home
                    </Link>
                </li>

                <li>
                    <Link
                    to="/stores"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                    Stores
                    </Link>
                </li>

                <li>
                    <Link
                    to="/transactions"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                    Transactions
                    </Link>
                </li>

                {user && <li>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        <span className="text-sm font-medium"> Account </span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            />
                        </svg>
                        </span>
                    </summary>

                    <ul className="mt-2 space-y-1 px-4">
                        <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Details
                        </a>
                        </li>

                        <li>
                        <button onClick={handleLogout}
                            href="#"
                            className="w-full rounded-lg px-4 py-2 [text-align:_inherit] text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Logout
                        </button>
                        </li>
                    </ul>
                    </details>
                </li>}

                </ul>
            </div>
            
            {
                user ?
                    <Profile
                        name={user.name}
                        email={user.email}
                    />
                :
                <Link>
                <div className="absolute inset-x-0 bottom-10 left-3 border-t border-gray-100">
                    <Link to="/login" className="flex items-center bg-white p-1 hover:bg-gray-50">

                    <div>
                        <p className="text-xl">
                        <strong className="block font-medium">LOGIN</strong>
                        </p>
                    </div>
                    </Link>
                </div>
                </Link>
            }
        </aside>
    )
}

export default Sidebar;