import NextLink from "next/link";
import styles from "./styles.module.css";

type LinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export default function Link({ href, children, className }: LinkProps) {
    return (
        <div className={className}>
            <NextLink href={href}>
                <a className={styles.link}>{children}</a>
            </NextLink>
        </div>
    );
}
