import Head from "next/head";
import { GetStaticProps } from "next";

import * as contentful from "contentful";
import styles from "./index.module.scss";

type Project = {
    fields: {
        description: { content: { content: [{ value: string }] }[] };
        miniature: {
            fields: { title: string; file: { url: string; fileName: string } };
        };
        title: string;
    };
};

type HomeProps = { projects: Project[] };

export default function Home(props: HomeProps) {
    console.log(props);
    return (
        <div className={styles.page + " page"}>
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
        </div>
    );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_KEY,
    });
    try {
        const entries = await client.getEntries();
        return { props: { projects: entries.items as Project[] } };
    } catch (error) {
        console.log(error);
        return { props: { projects: [] } };
    }
};
