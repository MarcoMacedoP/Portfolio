export type Route = { url: string; name: string; isExternal: boolean };

export const routes: Route[] = [
    { url: "/portfolio", name: "Portfolio", isExternal: false },
    { url: "/#about", name: "About", isExternal: false },
    { url: "/assets/cv.pdf", name: "Download CV", isExternal: true },
];

