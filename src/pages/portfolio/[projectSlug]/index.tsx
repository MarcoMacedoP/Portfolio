import { GetStaticPaths, GetStaticProps } from "next";
import { getAllProjects, Project as P } from "../../../repositories/projects";

import Link from "../../../components/Link";
import Mockup from "../../../components/Mockup";

import styles from "./styles.module.css";

type ProjectProps = {
    project: P;
};

export default function Project(props: ProjectProps) {
    const { project } = props;
    return (
        <>
            <header className={styles.header}>
                <img src={project.bannerUrl} alt="" />
            </header>
            <main className="page">
                <article>
                    <h1 className={styles.title}>
                        portfolio/
                        <span className="color-primary">{project.slug}</span>
                    </h1>
                    <p>{project.miniature.text}</p>
                    <br />
                    <p>{project.description}</p>

                    {project.productionUrl && (
                        <div className={styles.link}>
                            <Link href={project.productionUrl}>
                                Watch it live!
                            </Link>
                        </div>
                    )}
                </article>
                <article>
                    <h5 className={styles.subtitle}>Technologies used</h5>
                    <ul className="list">
                        {project.technologies.map((tech) => (
                            <li key={tech.name}> {tech.name}</li>
                        ))}
                    </ul>
                </article>
                <article className={styles.gallery}>
                    {project.gallery?.map((galleryItem) => (
                        <section className={styles.galleryItem}>
                            <div className={styles.mockup}>
                                <Mockup
                                    className={styles[galleryItem.type]}
                                    imageUrl={galleryItem.imageUrl}
                                    type={galleryItem.type}
                                />
                            </div>
                            <p>{galleryItem.description}</p>
                        </section>
                    ))}
                </article>
            </main>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { payload } = await getAllProjects();
    const paths = payload.projects.map((p) => ({
        params: { projectSlug: p.slug },
    }));
    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps<ProjectProps> = async (query) => {
    const { projectSlug } = query.params;
    const { payload } = await getAllProjects();
    const project = payload.projects.find((p) => p.slug === projectSlug);
    return {
        notFound: !project,
        props: { project },
    };
};
