interface RepositorieResponse<P = null> {
    status: "success" | "error";
    payload?: P;
}
export interface Project {
    slug: string;
    relevance: "important" | "normal";
    title: string;
    description: string;
    miniature: { url: string; text: string };
    technologies: { name: string }[];
    productionUrl?: string;
}

export async function getAllProjects(): Promise<
    RepositorieResponse<{ projects: Project[] }>
> {
    const projects = (await import("./projects.data.json")).default;

    return {
        status: "success",
        payload: { projects : projects as Project[]},
    };
}
