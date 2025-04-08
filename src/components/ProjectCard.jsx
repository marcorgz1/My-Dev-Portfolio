export function ProjectCard({ title, description, image, technologies, github, url }) {
    return (
        <section>
            <img src={image} alt="Project image" />
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
            {
                technologies.map((technology) => (
                    <span>{technology}</span>
                ))
            }
            </div>
            <div>
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
