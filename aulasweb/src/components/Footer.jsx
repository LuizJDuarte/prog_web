import styles from "./Footer.module.css";

export default function Footer(){
    return(
        <footer className={styles.footerContainer}>
            <p>@Copyright - Todos os direitos reservados</p>
        </footer>
    );
}