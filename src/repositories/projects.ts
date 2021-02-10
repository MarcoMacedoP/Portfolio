interface RepositorieResponse<P = null> {
    status: "success" | "error";
    payload?: P;
}
export interface Project {
    title: string;
    description: string;
    miniature: { url: string; text: string };
}

export function getAllProjects(): Promise<
    RepositorieResponse<{ projects: Project[] }>
> {
    return new Promise((resolve, reject) => {
        const projects: Project[] = [
            {
                title: "SiCar Farms",
                miniature: { url: "", text: "Frontend project " },
                description:
                    "SICAR FARMS es una empresa mexicana dedicada a la industria agricola. Este proyecto consta de una aplicacion web creada con React, utilizando Next.js que permite combinar Server Side Rendering y  Static File Generation.",
            },
            {
                title: "SiCar Farms",
                miniature: { url: "", text: "Frontend project " },
                description:
                    "SICAR FARMS es una empresa mexicana dedicada a la industria agricola. Este proyecto consta de una aplicacion web creada con React, utilizando Next.js que permite combinar Server Side Rendering y  Static File Generation.",
            },
        ];
        resolve({
            status: "success",
            payload: { projects },
        });
    });
}
