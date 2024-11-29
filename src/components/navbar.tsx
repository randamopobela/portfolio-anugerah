export function Navbar() {
    return (
        <div className="flex justify-center w-full bg-transparent">
            <div className="flex justify-between items-center max-w-6xl">
                <div className="flex">
                    <a href="https://randamopobela.github.io/">
                        <span className="font-bold">randa</span>
                    </a>
                    <div>
                        <a href="#" className="text-gray-600">
                            Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
