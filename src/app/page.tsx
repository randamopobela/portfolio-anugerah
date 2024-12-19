import { Navbar } from "@/components/navbar";
import { Skills } from "@/components/skills";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="flex flex-col justify-center items-center mt-24">
                {/* Hero Section */}
                <section className="flex justify-evenly items-center flex-wrap lg:flex-nowrap w-fit lg:w-4/5 my-10 lg:my-20 mx-4 lg:mx-0 gap-3">
                    {/* Hello */}
                    <div className="flex flex-col items-center font-bold text-slate-700 text-3xl">
                        <div className="lg:w-3/4">
                            <div className="flex flex-col justify-evenly">
                                <h1>Hi 👋🏻, My name is</h1>
                                <span className="text-gradient">
                                    Anugerah Mopobela
                                </span>
                                <h1> I'm a Full-Stack Web Developer</h1>
                                <p className="py-2 font-light text-base">
                                    I build functional, responsive, and scalable
                                    web applications using modern technologies
                                    like React, Node.js, and MongoDB.
                                </p>

                                <div className="flex flex-col lg:flex-row">
                                    {/* Sosial Media */}
                                    <div className="flex justify-evenly items-center gap-8 py-6 lg:justify-start">
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

                                    <div className="flex justify-center items-center w-full bg-text-gradient">
                                        {/* <button className="flex justify-center items-center bg-slate-400 text-lg text-gradient">
                                            Contact Me
                                        </button> */}
                                        <button className="bg-slate-600 text-lg text-gradient py-1 rounded-md hover:scale-105">
                                            Contact Me
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Foto Profil */}
                    <div className="flex h-auto">
                        <div className="relative flex justify-center scale-90 max-w-">
                            {/* <!-- Gambar Profil --> */}
                            <Image
                                src="/assets/images/profile.jpg"
                                alt="Profile"
                                width={480}
                                height={480}
                                className="relative object-cover items-center rounded-full lg:max-w-sm"
                            />
                        </div>
                        {/* <div className="container rounded-md flex justify-center items-center lg:w-1/2">
                        </div> */}
                    </div>
                </section>

                {/* About Section */}
                <section className="flex justify-evenly items-center flex-wrap lg:flex-nowrap w-fit lg:w-4/5 my-10 lg:my-20 mx-4 lg:mx-0">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-bold text-2xl">About</h1>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="flex flex-col justify-evenly items-center flex-wrap lg:flex-nowrap w-fit lg:w-4/5 my-10 lg:my-20 mx-4 lg:mx-0">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <h1 className="font-bold text-2xl">My Skills</h1>
                        <p>Technologies I've been working with recently</p>
                    </div>

                    {/* Icon Skills */}
                    <div className="flex justify-center items-center flex-wrap mt-8 gap-10 lg:max-w-screen-md">
                        <Skills
                            imageLink="/assets/images/skill-icons-html.png"
                            imageAlt="HTML"
                            imageTitle="HTML"
                        />
                        <Skills
                            imageLink="/assets/images/skill-icons-css.png"
                            imageAlt="CSS"
                            imageTitle="CSS"
                        />
                        <Skills
                            imageLink="/assets/images/skill-icons-javascript.png"
                            imageAlt="Javascript"
                            imageTitle="JavaScript"
                        />
                        <Skills
                            imageLink="/assets/images/skill-icons-typescript.png"
                            imageAlt="typescript"
                            imageTitle="TypeScript"
                        />
                        <Skills
                            imageLink="/assets/images/skill-icons-tailwindcss-dark.png"
                            imageAlt="tailwindcss"
                            imageTitle="TailwindCSS"
                        />
                        <Skills
                            imageLink="/assets/images/skill-icons-react-dark.png"
                            imageAlt="reactjs"
                            imageTitle="ReactJS"
                        />
                        <Skills
                            imageLink="/assets/images/skill-icons-nodejs-dark.png"
                            imageAlt="nodejs"
                            imageTitle="NodeJS"
                        />
                        <Skills
                            imageLink="/assets/images/skill-icons-mysql-light.png"
                            imageAlt="mysql"
                            imageTitle="MySQL"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}
