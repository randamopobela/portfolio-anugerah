export function Navbar() {
    return (
        <nav className="flex justify-center w-full bg-transparent py-8 fixed top-0">
            <div className="flex justify-around items-center w-full max-w-6xl">
                {/* Logo */}
                <a href="https://randamopobela.github.io/">
                    <span className="font-bold text-xl text-gradient">
                        randa
                    </span>
                </a>
                <div className="flex gap-9">
                    {/* List Menu */}
                    <ul className="flex gap-10">
                        <li>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-hover"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-hover"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-hover"
                            >
                                Tech Stack
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-hover"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-hover"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Sosial Media */}
                    <div className="flex justify-center items-center gap-3">
                        {/* Icon Github */}
                        <a
                            href="#"
                            className="flex justify-center items-center size-5 bg-gray-500 hover:bg-normal-hover rounded-full"
                        >
                            <svg
                                className="size-3 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {" "}
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>

                        {/* Icon Instagram */}
                        <a
                            href="#"
                            className="flex justify-center items-center size-5 bg-gray-500 hover:bg-normal-hover rounded-full"
                        >
                            <svg
                                className="size-3 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {" "}
                                <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="5"
                                    ry="5"
                                ></rect>{" "}
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>{" "}
                                <line
                                    x1="17.5"
                                    y1="6.5"
                                    x2="17.51"
                                    y2="6.5"
                                ></line>
                            </svg>
                        </a>

                        {/* Icon LinkedIn */}
                        <a
                            href="#"
                            className="flex justify-center items-center size-5 bg-gray-500 hover:bg-normal-hover rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-3 fill-white"
                                viewBox="0 0 20 20"
                                id="linkedin"
                            >
                                <path d="M5 3c0 1.1-.7 2-2 2-1.2 0-2-.9-2-1.9C1 2 1.8 1 3 1s2 .9 2 2zM1 19h4V6H1v13zM14.6 6.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
