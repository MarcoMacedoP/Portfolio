import styles from "./styles.module.css";

type MockupProps = {
    imageUrl: string;
    imageAlt?: string;
    className?: string;
    type: "mobile" | "web";
};

export default function Mockup(props: MockupProps) {
    const { imageUrl, imageAlt = "", type } = props;

    return (
        <section className={`${styles.container} ${styles[type]} ${props.className}`}>
            <img
                className={styles.mockup}
                src={`/assets/img/${type}-mockup.png`}
                alt=""
            />
            <img className={styles.content} src={imageUrl} alt={imageAlt} />
        </section>
    );
}
