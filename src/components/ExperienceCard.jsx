import '../css/Experience.css'
import { CalendarIcon } from './Icons'

export function ExperienceCard ({ title, company, year, description, technologies }) {
    return (
        <>
            <section className="experience_card__title">
                <h2>{title}</h2>
                <div className="experience_card__date">
                    <CalendarIcon />
                    <span>{year}</span>
                </div>
            </section>
            <span className='experience_card__company'>{company}</span>
            <p>{description}</p>
            {
                technologies && (
                    <ul className='experience_card__technologies'>
                        {
                            technologies.map((technology, index) => (
                                <li key={index}>{technology}</li>
                            ))
                        }
                    </ul>
                )
            }
        </>
    )

}
