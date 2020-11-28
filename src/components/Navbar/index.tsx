import React from "react";
import styles from "./styles.module.scss";

type NavbarProps = {};

export default function Navbar(props: NavbarProps) {
    return (
        <nav className={styles.container}>
            <strong className="headline">
                marco<span className="headline white">.macedo;</span>
            </strong>
            <ul className={styles.list}>
                <li>
                    <a>Portfolio</a>
                </li>
                <li>
                    <a>About me</a>
                </li>
                    <li className={`${styles.cvButton} button`}>
                    <a>About me</a>
                </li>
            </ul>
        </nav>
    );
}
