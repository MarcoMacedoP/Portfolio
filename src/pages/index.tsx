import Head from "next/head";
import { GetStaticProps } from "next";

import * as contentful from "contentful";
import styles from "./index.module.scss";

import { Project, getAllProjects } from "../repositories/projects";
import ProjectMiniature from "../components/ProjectMiniature";
import ProjectsList from "../components/ProjectsList";
import Link from "../components/Link";
import SocialIcons from "../components/SocialIcons";

type HomeProps = { projects: Project[]; status: "success" | "error" };

export default function Home(props: HomeProps) {
    console.log(props);
    return (
        <div className={styles.page}>
            <section className={styles.cover}>
                <div className={styles.imageContainer}>
                    <picture className={styles.image}></picture>
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
                <ProjectsList
                    projects={props.projects}
                    setProjectTheme={(_, index) =>
                        index % 2 ? "primary" : "primary-ligth"
                    }
                />
            </section>
            <section id="about" className={styles.about}>
                <h3 className="headline">About me</h3>
                <p className="code">
                    {/**Soy un desarrollador de software localizado en la bella
                    ciudad de Guadalajara en México. Me enamoré de programar
                    desde el momento en el que escribí mi primera linea de
                    código cuando tenia 15 años. 
                       */}
                    Im a software developer located in the beautiful city of
                    Guadalajara, Jal, México. I fall in love with coding since
                    the moment that I write my first line of code, when I was 15
                    years old.
                    <br />
                    <br />
                    {/*Actualmente soy un entusiaste del desarrollo frontend, me
                    gusta mucho todo lo que este relacionado con la interacción
                    del usuario. */}
                    Actually I'm an entusiast of frontend development, I like
                    all things about the user interaction.
                    <br />
                    <br />
                    {/*Apesar de que tengo un titulo de tecnologo en Desarollo de
                    Software me considero una persona muy autodidacta. Para mí,
                    el ser autodidacta ha significado aprender una gran cantidad
                    de cosas, desde técnologia hasta anectodas historicas.*/}
                    Even whith a bachelors degree in software development I`ve
                    allways considered myself has an self-lerner. To me, being a
                    self-learned has meant learn about a lot of things! from
                    technologie to historical jokes.
                    <br /> <br />
                    {/*En mis tiempos libres disfruto de leer libros, aprender
                       sobre diseño y escuchar música */}
                    In my free times I enjoy reading books, learning about
                    desing and listen to music.
                </p>
                <h4 className="subtitle" id="contact">Also, you can find me here:</h4>
                <SocialIcons />
                <Link
                    isExternal
                    href="mailto:marcosiegman01@gmail.com"
                    colorRegular="var(--color-primary-dark)"
                    colorHovered="var(--color-primary)"
                >
                    Contact me!
                </Link>
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
