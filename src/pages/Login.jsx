import { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState();

    const [loginError, setLoginError] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const response = await axios.post(
                "/user/login?" + `email=${email}&password=${password}`,
            );
            setLoading(false);

            setUser(response.data.payload);
            
            localStorage.setItem("user", JSON.stringify(response.data.payload));
            console.log(localStorage.getItem("user"));
    
            window.location.href = "/";
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Email address
                        </label>
                        <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                            Password
                        </label>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-yellow-600 hover:text-yellow-500">
                            Forgot password?
                            </a>
                        </div>
                        </div>
                        <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        </div>
                    </div>

                    <div>
                        <button
                        type="submit"
                        className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 ${
                            loading
                              ? "bg-yellow-300 cursor-not-allowed text-white"
                              : "bg-yellow-400 hover:bg-yellow-500 text-white"
                          }`}
                        >
                        {loading ? "Signing in..." : "Sign in"}
                        </button>
                    </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                    No account? {' '}
                    <a href="/register" className="font-semibold text-yellow-400 hover:text-yellow-300">
                        Register
                    </a>
                    </p>
                    {loginError && (
                    <div className="mt-4 rounded-md bg-red-100 border border-red-400 text-red-700 px-4 py-3 text-sm text-center">
                        <strong className="font-semibold">Invalid email or password.</strong> Please try again.
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Login;