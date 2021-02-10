import Link from "../Link";
import styles from "./styles.module.css";

type ProjectMiniatureProps = {
    title: string;
    desc: string;
    string: string;
    imageUrl: string;
    theme?: "primary" | "primary-ligth";
};
export default function ProjectMiniature(props: ProjectMiniatureProps) {
    const { theme = "primary", ...project } = props;
    const color = `var(--color-${theme})`;

    return (
        <article
            className={styles.container}
            style={{ "--color": color } as React.CSSProperties}
        >
            <section className={styles.projectInformation}>
                <p className={styles.title}>{project.title}</p>
                <p className={styles.desc}>{project.desc}</p>
                <Link
                    href=""
                    className={styles.link}
                    colorRegular={color}
                    colorHovered={`var(--color-${
                        theme === "primary" ? "primary-ligth" : "primary"
                    })`}
                >
                    Know more about this project &gt;{" "}
                </Link>
            </section>
            <section className={styles.picture}>
                <img src={project.imageUrl} alt={project.title} />
            </section>
        </article>
    );
}
