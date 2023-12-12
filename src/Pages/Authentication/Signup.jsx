import { Link } from "react-router-dom";

function Signup () {
    return (
        <section className="mt-10 mb-5">
            <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
                <div class="absolute inset-0">
                <img
                    class="h-full w-full rounded-md object-cover object-top"
                    src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                    alt=""
                />
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div class="relative">
                <div class="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                    <h3 class="text-4xl font-bold text-white">
                    Now you dont have to rely on your designer to create a new page
                    </h3>
                    <ul class="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                    <li class="flex items-center space-x-3">
                        <div class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                        <svg
                            class="h-3.5 w-3.5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                            ></path>
                        </svg>
                        </div>
                        <span class="text-lg font-medium text-white">
                        {" "}
                        Commercial License{" "}
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <div class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                        <svg
                            class="h-3.5 w-3.5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                            ></path>
                        </svg>
                        </div>
                        <span class="text-lg font-medium text-white">
                        {" "}
                        Unlimited Exports{" "}
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <div class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                        <svg
                            class="h-3.5 w-3.5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                            ></path>
                        </svg>
                        </div>
                        <span class="text-lg font-medium text-white">
                        {" "}
                        120+ Coded Blocks{" "}
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <div class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                        <svg
                            class="h-3.5 w-3.5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                            ></path>
                        </svg>
                        </div>
                        <span class="text-lg font-medium text-white">
                        {" "}
                        Design Files Included{" "}
                        </span>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
                    Sign up
                </h2>
                <p class="mt-2 text-base text-gray-600">
                    Already have an account?{" "}
                    <Link to={"/signin"}
                    title=""
                    class="font-medium text-black transition-all duration-200 hover:underline"
                    >
                    Sign In
                    </Link>
                </p>
                <form action="#" method="POST" class="mt-8">
                    <div class="space-y-5">
                    <div>
                        <label for="name" class="text-base font-medium text-gray-900">
                        {" "}
                        Full Name{" "}
                        </label>
                        <div class="mt-2">
                        <input
                            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Full Name"
                            id="name"
                        />
                        </div>
                    </div>
                    <div>
                        <label for="email" class="text-base font-medium text-gray-900">
                        {" "}
                        Email address{" "}
                        </label>
                        <div class="mt-2">
                        <input
                            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            placeholder="Email"
                            id="email"
                        />
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-between">
                        <label
                            for="password"
                            class="text-base font-medium text-gray-900"
                        >
                            {" "}
                            Password{" "}
                        </label>
                        </div>
                        <div class="mt-2">
                        <input
                            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="password"
                            placeholder="Password"
                            id="password"
                        />
                        </div>
                    </div>
                    <div>
                        <button
                        type="button"
                        class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        >
                        Create Account{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="ml-2"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                        </button>
                    </div>
                    </div>
                </form>
                
                </div>
            </div>
            </div>
        </section>

    )
}

export default Signup;