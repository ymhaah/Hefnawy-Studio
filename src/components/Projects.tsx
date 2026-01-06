import Image from "next/image";

import projectImage1 from "../assets/images/projects/p-1.jpeg";
import projectImage2 from "../assets/images/projects/p-2.jpeg";
import projectImage3 from "../assets/images/projects/p-3.png";
import projectImage4 from "../assets/images/projects/p-4.jpeg";

import projectImage1Webp from "../assets/images/projects/p-1.webp";
import projectImage2Webp from "../assets/images/projects/p-2.webp";
import projectImage3Webp from "../assets/images/projects/p-3.webp";
import projectImage4Webp from "../assets/images/projects/p-4.webp";

const projectsInfo = [
    {
        img: projectImage1,
        webp: projectImage1Webp,
        alt: "NPFF",
    },
    {
        img: projectImage2,
        webp: projectImage2Webp,
        alt: "hot grid",
    },
    {
        img: projectImage3,
        webp: projectImage3Webp,
        alt: "travel agency",
    },
    {
        img: projectImage4,
        webp: projectImage4Webp,
        alt: "nike landing page",
    },
];

function Projects() {
    return (
        <section className="Projects | mb-32 mt-32 w-full max-sm:mb-12 max-sm:mt-12">
            <div className="Container">
                <h2 className="h1 fs-xl mb-4 text-center max-sm:mb-2">
                    Projects
                </h2>
                <div className="mt-24 grid grid-cols-1 gap-20 max-sm:mt-12 max-sm:gap-4">
                    {projectsInfo.map((project, index) => {
                        return (
                            <div
                                className="project | shadow-3xl relative aspect-[12/9] w-full overflow-hidden rounded-[2rem] bg-white max-sm:rounded-[1rem]"
                                key={index}
                            >
                                <picture>
                                    <source
                                        srcSet={project.webp.src}
                                        type="image/webp"
                                    />
                                    <Image
                                        src={project.img}
                                        alt={project.alt}
                                        className="size-full"
                                        placeholder="blur"
                                    />
                                </picture>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;
