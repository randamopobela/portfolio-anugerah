export function Navbar() {
    return (
        <nav className="flex justify-center w-full bg-white py-8 mx-4 lg:mx-0 fixed top-0 z-10">
            <div className="flex justify-around items-center w-full max-w-6xl">
                {/* Logo */}
                <a href="https://randamopobela.github.io/">
                    <span className="font-bold text-xl text-gradient">
                        Mopobela
                    </span>
                </a>
                <div className="flex gap-9">
                    {/* List Menu */}
                    <ul className="flex font-bold gap-10">
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
                                My Skills
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
                </div>
            </div>
        </nav>
    );
}
