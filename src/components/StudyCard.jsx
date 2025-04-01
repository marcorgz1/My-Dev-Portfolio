import '../css/Studies.css'

export function StudyCard ({ title, year, description }) {
    return (
        <li className="study_card">
            <h2>{title}</h2>
            <span>{year}</span>
            <p>{description}</p>
        </li>
    )

}
