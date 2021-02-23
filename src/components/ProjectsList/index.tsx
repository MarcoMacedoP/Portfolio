import { Project } from "../../repositories/projects";
import ProjectMiniature from "../ProjectMiniature";
import styles from "./styles.module.css";

type ProjectsListProps = {
    projects: Project[];
    setProjectTheme?: (
        project: Project,
        index: number
    ) => "primary" | "primary-ligth";
};
export default function ProjectsList({
    projects,
    setProjectTheme = ()=> null,
}: ProjectsListProps) {
    return (
        <div className={styles.list}>
            {projects.map((project, index) => (
                <ProjectMiniature
                    key={project.slug}
                    project={project}
                    theme={setProjectTheme(project, index) || 'primary-ligth'}
                />
            ))}
        </div>
    );
}
