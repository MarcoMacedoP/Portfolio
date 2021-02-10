import Head from "next/head";
import { GetStaticProps } from "next";

import * as contentful from "contentful";
import styles from "./index.module.scss";

import { Project, getAllProjects } from "../repositories/projects";
import ProjectMiniature from "../components/ProjectMiniature";

type HomeProps = { projects: Project[]; status: "success" | "error" };

export default function Home(props: HomeProps) {
    console.log(props);
    return (
        <div className={styles.page}>
            <section className={styles.cover}>
                <div className={styles.imageContainer}>
                    <picture className={styles.image}>
                        <img src="/assets/img/profile-pic.png" />
                    </picture>
                </div>
                <h1 className={styles.title}>
                    {"{"}
                    <br />
                    <strong>
                        name: <span>"Marco Macedo"</span>,
                    </strong>
                    <strong>
                        role: <span>"Frontend developer"</span>,
                    </strong>
                    <br />
                    {"}"}
                </h1>
            </section>
            <section className={styles.projects}>
                <h2 className="headline">
                    frontend/
                    <span className="color-primary-ligth">portfolio/</span>
                </h2>
                <div className={styles.projectsList}>
                    {props.projects.map((project, index) => (
                        <ProjectMiniature
                            title={project.title}
                            desc={project.miniature.text}
                            imageUrl={project.miniature.url}
                            theme={index % 2 ? "primary" : "primary-ligth"}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    try {
        const { status, payload } = await getAllProjects();
        return { props: { projects: payload?.projects || [], status } };
    } catch (error) {
        console.log(error);
        return { props: { projects: [], status: "error" } };
    }
};
