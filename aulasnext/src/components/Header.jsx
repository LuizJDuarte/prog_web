import Link from "next/link";
import styles from "./Header.module.css";

export default function Header(){
    return(
        <header className={styles.headerContainer}>
            <h2>Meu blog com Next.js</h2>
            <nav className={styles.navLinks}>
                <Link href={"/"}>Home</Link>
                <Link href={"/sobre"}>Sobre</Link>
                <Link href={"/contato"}>Contato</Link>
            </nav>
        </header>
    );
}