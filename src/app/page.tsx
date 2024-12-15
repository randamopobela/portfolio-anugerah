import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="flex flex-col justify-center items-center mt-24">
                <section className="flex justify-evenly items-center w-4/5 my-20">
                    <div className="flex-col font-bold text-slate-700 text-3xl pl-20">
                        <h1>Hi 👋🏻, My name is</h1>
                        <span className="text-gradient">Anugerah Mopobela</span>
                        <h1>I build things for Web</h1>
                    </div>
                    <div className="flex h-auto">
                        <div className="container rounded-md flex justify-center items-center lg:w-1/2">
                            <div className="relative flex justify-center scale-90">
                                {/* <!-- Gambar Profil --> */}
                                <Image
                                    src="/assets/images/hero-section.png"
                                    alt="Profile"
                                    width={540}
                                    height={540}
                                    className="relative z-1 object-cover items-center rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center w-4/5 my-20">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-bold text-2xl">My Tech Stack</h1>
                        <p>Technologies I've been working with recently</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p>Isi dengan logo tech</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
