import { Link } from 'react-router-dom'

export function ProjectCard ({ title, description, image, technologies, github, url }) {
    return (
        <section className='project_card'>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} alt="Project image" />
            <div>
            {
                technologies.map((technology, index) => (
                    <span key={index}>{technology}</span>
                ))
            }
            </div>
            <div className="project_buttons">
                <Link className='project_button' to={github}>Github</Link>
                <Link className='project_button' to={url}>Demo</Link>
            </div>

        </section>
    )
}
