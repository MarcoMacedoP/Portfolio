import { useRef } from "react";
import { Project } from "../../repositories/projects";
import Link from "../Link";
import styles from "./styles.module.css";

type ProjectMiniatureProps = {
    theme?: "primary" | "primary-ligth";
    project: Project;
};
export default function ProjectMiniature(props: ProjectMiniatureProps) {
    const { theme = "primary", project } = props;
    const color = `var(--color-${theme})`;

    const container = useRef<HTMLElement>();

    const showMoreProjectDetails = () => {
        const element = container.current;
        element.classList.toggle(styles.expandedContainer);
    };

    return (
        <article
            className={styles.container}
            style={{ "--color": color } as React.CSSProperties}
            onClick={showMoreProjectDetails}
            ref={container}
        >
            <section className={styles.projectInformation}>
                <p className={styles.title}>{project.title}</p>
                <p className={styles.desc}>{project.miniature.text}</p>
                <div className={styles.moreDetails}>
                    <p>{project.description}</p>
                    <div className={styles.technologies}>
                        <p className={styles.subtitle}>Technologies used</p>
                        <ul className={styles.technologiesList}>
                            {project.technologies.map((tech) => (
                                <li key={tech.name}> {tech.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Link
                    onClick={(event) => event.stopPropagation()}
                    href={"/projects/" + project.slug}
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
                <img src={project.miniature.url} alt={project.title} />
            </section>
        </article>
    );
}
