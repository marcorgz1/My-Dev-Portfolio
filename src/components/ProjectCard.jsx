import '../css/ProjectCard.css'

export function ProjectCard({ title, description, image, technologies, github, url }) {
    return (
        <section className="project_card">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} alt="Project image" />
            <div className='technologies_container'>
            {
                technologies.map((technology, index) => (
                    <div key={index}>
                        <span>{technology}</span>
                    </div>
                ))
            }
            </div>
            <div className='project_buttons'>
                {github && (
                    <button>
                        <a href={github} target='_blank'>GitHub</a>
                    </button>
                )}
                {url && (
                    <button>
                        <a href={url} target='_blank'>Demo</a>
                    </button>
                )}
            </div>
        </section>
    );
}
