import '../css/ProjectCard.css'

export function ProjectCard({ title, description, image, technologies, github, url }) {
    return (
        <section className="project_card">
            <img src={image} alt="Project image" />
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='technologies_container'>
            {
                technologies.map((technology) => (
                    <span>{technology}</span>
                ))
            }
            </div>
            <div className='project_buttons'>
                <button>
                    <a href={github}>GitHub</a>
                </button>
                <button>
                    <a href={url}>Demo</a>
                </button>
            </div>
        </section>
    );
}
