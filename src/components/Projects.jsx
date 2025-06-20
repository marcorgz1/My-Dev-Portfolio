import '../css/Projects.css'
import { ToolsIcon } from './Icons'
import { ProjectCard } from './ProjectCard'
import firstProjectImage from '/projects/first_project.png'
import secondProjectImage from '/projects/second_project.png'

const PROJECTS = [
    {
        title: 'App Verificación Cuadros Istel',
        description: 'Aplicación para administrar los cuadros de luz de una empresa en base a los clientes y a los requisitos de los mismos.',
        image: firstProjectImage,
        technologies: ['React', 'NodeJS', 'MySQL'],
        github: 'https://github.com/marcorgz1/App-Verificacion-Cuadros-Istel'
    },

    {
        title: 'Tenfe',
        description: 'Aplicación para realizar viajes en tren alrededor de España de una forma intuitiva y sencilla.',
        image: secondProjectImage,
        technologies: ['React', 'NodeJS', 'MySQL'],
        github: 'https://github.com/marcorgz1/Aplicacion-Gestion-Trenes-Tenfe',
        url: 'https://tenfe.onrender.com'
    }
]

export function Projects() {
    return (
        <section id="projects" className='projects'>
            <div className="projects_title__container">
                <ToolsIcon />
                <h1 className='projects_title'>Proyectos</h1>
            </div>
            <div className='projects_container'>
            {
                PROJECTS.map((project, index) => (
                    <div key={index}>
                    {
                        project.github && (

                            <ProjectCard 
                                title={project.title} 
                                description={project.description} 
                                image={project.image} 
                                technologies={project.technologies} 
                                github={project.github}
                                url={project.url}
                            />
                        ) 
                    }
                    </div>
                ))
            }
            </div>
        </section>
    )
}
