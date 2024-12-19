import { ListNavbar } from "./navbar-list";

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
                        <ListNavbar navList="Home" />
                        <ListNavbar navList="About" />
                        <ListNavbar navList="My Skills" />
                        <ListNavbar navList="Projects" />
                        <ListNavbar navList="Contact" />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
