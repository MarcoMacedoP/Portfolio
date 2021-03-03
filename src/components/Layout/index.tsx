import Navbar from "../Navbar";
import SocialIcons from "../SocialIcons";
import styles from "./styles.module.css";

import { routes } from "../../repositories/routes";
import Link from "../Link";

type LayoutProps = {
    children?: React.ReactChild;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="container">
            <Navbar routes={routes} />
            <main>{children}</main>
            <footer className={styles.footer}>
                <section className={styles.routes}>
                    {routes.map((route) => (
                        <Link
                            href={route.url}
                            isExternal={route.isExternal}
                            key={route.name}
                            className={styles.link}
                        >
                            {route.name}
                        </Link>
                    ))}
                </section>
                <p className="headline">marco.macedo;</p>
                <SocialIcons />
            </footer>
        </div>
    );
}
