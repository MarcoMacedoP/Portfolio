import NextLink from "next/link";
import styles from "./styles.module.css";

type LinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    colorRegular?: string;
    colorHovered?: string;
};

export default function Link({
    href,
    children,
    className,
    colorHovered = "var(--color-white)",
    colorRegular = "var(--color-primary-ligth)",
}: LinkProps) {
    return (
        <div
            className={className}
            style={
                {
                    "--color-regular": colorRegular,
                    "--color-hovered": colorHovered,
                } as React.CSSProperties
            }
        >
            <NextLink href={href}>
                <a className={styles.link}>{children}</a>
            </NextLink>
        </div>
    );
}
