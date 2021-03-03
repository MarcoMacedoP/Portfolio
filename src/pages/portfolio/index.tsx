import { GetStaticProps } from "next";
import ProjectsList from "../../components/ProjectsList";
import { getAllProjects, Project } from "../../repositories/projects";

type ProjectsProps = {
    projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
    return (
        <main className="page">
            <h1 className="headline color-white">software/projects</h1>
            <p className="color-white">
                This are some of the projects I’ve worked on. Here you can find
                 technical details about them and information about my role in
                these projects.
            </p>
            <ProjectsList projects={projects} />
            <style jsx>{`
                .page::after{
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;

                    width: 100%;
                    height:100%;
                    background: var(--color-primary);
                    z-index: -1;
                }
                h1 {
                    margin-bottom: 1rem;
                }
                p{
                    margin-bottom: 2rem;
                }
                main {
                    background-color: var(--color-primary);
                    height: 100%;
                }
            `}</style>
        </main>
    );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
    const result = await getAllProjects();

    return {
        props: { projects: result.payload.projects },
    };
};
