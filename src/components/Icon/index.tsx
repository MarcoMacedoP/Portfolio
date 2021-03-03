import styles from "./styles.module.css";

type IconProps = {
    children: React.ReactNode;
    animationDuration?: number;
    onClick?: () => void;
    className?: string;
};

export default function Icon({
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
