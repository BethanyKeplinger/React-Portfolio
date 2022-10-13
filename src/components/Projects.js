import React from "react";
import { projects } from "../data"

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div>
                <h1>Projects</h1>
                <p className="no"> Blurb about projects</p>
            </div>
            <div className="flex flex-wrap -m-4">
                {projects.map((project) => (
                    <a 
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4">

                        <div>
                            <img
                                alt=""
                                className=""
                                scr={project.image} />
                        </div>

                        <div>
                            <h2>{project.subtitle}</h2>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                        </div>
                        </a>
                ))}
            </div>
        </section>
    )
    
}