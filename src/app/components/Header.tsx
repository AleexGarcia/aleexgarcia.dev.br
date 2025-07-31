import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 h-16 min-w-full flex items-center justify-center">
            <nav>
                <ul className="flex gap-8">
                    <li>
                        <Link href="#">Sobre mim</Link>
                    </li>
                    <li>
                        <Link href="#">Habilidades Técnicas</Link>
                    </li>
                    <li>
                        <Link href="#">Projetos</Link>
                    </li>
                    <li>
                        <Link href="#">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}