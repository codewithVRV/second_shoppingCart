function Error () {
    return (
        <div class="mx-auto w-full max-w-7xl px-2 md:px-4">
            
            <div class="mx-auto my-12 flex max-w-6xl flex-col px-2 md:my-24 lg:my-32 lg:flex-row lg:items-center">
                <div>
                <div>
                    <p class="text-sm font-semibold text-black">404 error</p>
                    <h1 class="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
                    We can&#x27;t find that page
                    </h1>
                    <p class="mt-4 text-gray-500">
                    Sorry, the page you are looking for doesn&#x27;t exist or has been
                    moved.
                    </p>
                    <div class="mt-6 flex items-center gap-x-3">
                    <button
                        type="button"
                        class="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
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
                        class="mr-2"
                        >
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Go back
                    </button>
                    <button
                        type="button"
                        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Contact us
                    </button>
                    </div>
                </div>
                <div class="mt-10 space-y-6">
                    <div>
                    <a
                        href="#"
                        class="hover:underlin inline-flex items-center gap-x-2 text-sm font-semibold text-black"
                    >
                        <span>Documentation</span>
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
                        class="lucide lucide-arrow-right"
                        >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                    <p class="mt-2 text-sm text-gray-500">
                        Dive in to learn all about our product.
                    </p>
                    </div>
                    <div>
                    <a
                        href="#"
                        class="inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline"
                    >
                        <span>Our blog</span>
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
                        class="lucide lucide-arrow-right"
                        >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                    <p class="mt-2 text-sm text-gray-500">
                        Read the latest posts on our blog.
                    </p>
                    </div>
                    <div>
                    <a
                        href="#"
                        class="inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline"
                    >
                        <span>Chat to support</span>
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
                        class="lucide lucide-arrow-right"
                        >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                    <p class="mt-2 text-sm text-gray-500">
                        Our friendly team is here to help.
                    </p>
                    </div>
                </div>
                </div>
                <div class="hidden lg:block">
                <img
                    src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                    alt="404"
                    class="h-full w-full rounded-md object-cover"
                />
                </div>
            </div>
           
        </div>

    )
}

export default Error;