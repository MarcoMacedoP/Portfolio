import NextLink from "next/link";
import styles from "./styles.module.css";

type LinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    colorRegular?: string;
    colorHovered?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    isExternal?: boolean;
};

export default function Link({
    href,
    children,
    className,
    colorHovered = "var(--color-white)",
    colorRegular = "var(--color-primary-ligth)",
    onClick,
    isExternal,
}: LinkProps) {
    const colorStyles = {
        "--color-regular": colorRegular,
        "--color-hovered": colorHovered,
    } as React.CSSProperties;

    if (isExternal) {
        return (
            <div className={className} style={colorStyles}>
                    <a href={href} className={styles.link} onClick={onClick} target="__blank" rel="noopener">
                        {children} &gt;
                    </a>
            </div>
        );
    }
    return (
        <div className={className} style={colorStyles}>
            <NextLink href={href}>
                <a className={styles.link} onClick={onClick}>
                    {children} &gt;
                </a>
            </NextLink>
        </div>
    );
}
