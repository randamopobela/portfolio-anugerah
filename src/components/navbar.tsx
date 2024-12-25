"use client";

import { useEffect, useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Jika posisi scroll lebih dari 2px, ubah state menjadi true
            setIsScrolled(window.scrollY > 2);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener saat komponen unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`flex justify-center w-full bg-white py-4 mx-0 lg:mx-0 fixed top-0 z-10 shadow-md ${
                isScrolled ? "shadow-md" : "shadow-none"
            }`}
        >
            <div className="flex justify-between mx-6 md:justify-around items-center w-full max-w-6xl">
                {/* Logo */}
                <a
                    href="https://randamopobela.github.io/"
                    className="hover:scale-110 easy-out duration-200"
                >
                    <span className="font-bold text-xl text-gradient">
                        Mopobela
                    </span>
                </a>

                {/* Menu Dropdown */}
                <div className="flex relative  md:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost"
                        onClick={toggleDropdown}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    {isOpen && (
                        <ul
                            tabIndex={0}
                            className="flex flex-col absolute right-0 top-11 bg-slate-100 rounded-lg z-50 w-40 p-4 gap-2 shadow-lg"
                        >
                            <ListNavbar navList="Home" navLink="#home" />
                            <ListNavbar navList="About" navLink="#about" />
                            <ListNavbar
                                navList="My Skills"
                                navLink="#myskills"
                            />
                            <ListNavbar
                                navList="Projects"
                                navLink="#projects"
                            />
                            <ListNavbar navList="Contact" />
                        </ul>
                    )}
                </div>

                {/* Menu Horizontal */}
                <div className="hidden md:flex gap-9">
                    {/* List Menu */}
                    <ul className="flex font-bold gap-10">
                        <ListNavbar navList="Home" navLink="#home" />
                        <ListNavbar navList="About" navLink="#about" />
                        <ListNavbar navList="My Skills" navLink="#myskills" />
                        <ListNavbar navList="Projects" navLink="#projects" />
                        <ListNavbar navList="Contact" />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export function ListNavbar({
    navList,
    navLink,
}: {
    navList: string;
    navLink?: string;
}) {
    return (
        <button className="hover:bg-gray-200 md:hover:bg-white hover:scale-110 easy-out duration-200">
            <a
                href={navLink}
                className="text-black md:text-gray-600 hover:text-hover"
            >
                {navList}
            </a>
        </button>
    );
}
