import React, { useEffect, useLayoutEffect, useRef } from "react";
import NextLink from "next/link";
import { useScroll } from "react-reusable-hooks";
import styles from "./styles.module.scss";
import Link from "../Link";

type NavbarProps = {};

type Route = { url: string; name: string };

const routes: Route[] = [
    { url: "/portfolio", name: "Portfolio" },
    { url: "#about", name: "About" },
    { url: "#cv", name: "Download CV" },
];

export default function Navbar(props: NavbarProps) {
    const navbar = useRef<HTMLElement>();
    const scrolledClass = styles.containerScrolled;

    useScroll((position) => {
        const element = navbar.current;
        const maxScrollY = 200;
        if (position.y > maxScrollY) {
            element.classList.add(scrolledClass);
        } else {
            element.classList.remove(scrolledClass);
        }
    });

    return (
        <nav className={styles.container} ref={navbar}>
            <NextLink href="/">
                <a>
                    <strong className="headline">
                        marco
                        <span className="headline color-white">.macedo;</span>
                    </strong>
                </a>
            </NextLink>
            <Menu routes={routes} />
        </nav>
    );
}
type MenuProps = { routes: Route[] };

const Menu = (props: MenuProps) => {
    const animationDuration = 400;
    const routes = useRef<HTMLUListElement>();

    const onMenuOpen = () => {
        routes.current.classList.add(styles.listShowed);
    };

    const onMenuClose = () => {
        const currentList = routes.current;
        currentList.classList.add(styles.listClosed);
        setTimeout(() => {
            currentList.classList.remove(styles.listShowed);
            currentList.classList.remove(styles.listClosed);
        }, animationDuration * 2);
    };

    const onRouteClick = ()=> {
        const isMenuOpen = routes.current.classList.contains(styles.listShowed)
        if(isMenuOpen){
            onMenuClose();
        }

    }

    return (
        <section
            style={
                {
                    "--animationDuration": `${animationDuration}ms`,
                } as React.CSSProperties
            }
        >
            <Icon
                animationDuration={400}
                onClick={onMenuOpen}
                className={styles.menuButton}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="var(--color-white)"
                    width="32px"
                    height="32px"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
            </Icon>
            <section ref={routes} className={styles.listContainer}>
                <ul className={styles.list}>
                    <li className={styles.closeList}>
                        <Icon
                            onClick={onMenuClose}
                            className={styles.menuButton}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="var(--color-white)"
                                width="32px"
                                height="32px"
                            >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                            </svg>
                        </Icon>
                    </li>
                    {props.routes.map((route) => (
                        <li key={route.url}>
                            <Link href={route.url} className={styles.link} onClick={onRouteClick}>
                                {route.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={styles.listBackground} onClick={onMenuClose} />
            </section>
        </section>
    );
};

type IconProps = {
    children: React.ReactNode;
    animationDuration?: number;
    onClick?: () => void;
    className?: string;
};

function Icon({
    children,
    className = "",
    animationDuration = 200,
    onClick,
}: IconProps) {
    const onMenuPress = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        const element = event.currentTarget;
        element.classList.add(styles.iconClicked);
        setTimeout(
            () => element.classList.remove(styles.iconClicked),
            animationDuration
        );
        if (onClick) {
            onClick();
        }
    };
    return (
        <div className={`${styles.icon} ${className}`} onClick={onMenuPress}>
            {children}
        </div>
    );
}
