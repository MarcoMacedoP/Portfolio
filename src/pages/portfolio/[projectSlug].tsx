import { GetStaticPaths, GetStaticProps } from "next";
import { getAllProjects, Project as P } from "../../repositories/projects";
import Link from "../../components/Link";

type ProjectProps = {
    project: P;
};
export default function Project(props: ProjectProps) {
    const { project } = props;
    return (
        <>
            <header>
                <img src={project.miniature.url} alt="" />
            </header>
            <main className="page">
                <article>
                    <h1 className="headline">
                        portfolio/
                        <span className="color-primary">{project.slug}</span>
                    </h1>
                    <p>{project.miniature.text}</p>
                    <br />
                    <p>{project.description}</p>

                    {project.productionUrl && (
                        <div className="link">
                            <Link href={project.productionUrl}>
                                Watch it live!
                            </Link>
                        </div>
                    )}
                </article>
                <article>
                    <h5 className="subtitle">Technologies used</h5>
                    <ul className="list">
                        {project.technologies.map((tech) => (
                            <li key={tech.name}> {tech.name}</li>
                        ))}
                    </ul>
                </article>
            </main>

            <style jsx>{`
                header {
                    height: 38.76vh;
                    position: relative;
                }
                header::after {
                    content: "";

                    position: absolute;
                    top: 0;
                    left: 0;

                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        183deg,
                        rgba(117, 78, 249, 1) 0%,
                        rgba(117, 78, 249, 1) 6%,
                        rgba(117, 78, 249, 0.82) 15%,
                        rgba(117, 78, 249, 0.23) 100%
                    );
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
                h1 {
                    margin: 3rem 0 1.5rem;
                }
                .link {
                    margin: 3rem 0;
                }
                .subtitle {margin-bottom: 1rem;}
            `}</style>
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
