export function ListNavbar({ navList }: { navList: string }) {
    return (
        <li>
            <a
                href="#"
                className="text-gray-600 hover:text-hover hover:scale-105"
            >
                {navList}
            </a>
        </li>
    );
}
