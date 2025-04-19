import '../css/Studies.css'
import { SchoolIcon } from './Icons'
import { StudyCard } from './StudyCard'

export function Studies () {
    const STUDIES = [
        {
            title: 'Grado Medio Sistemas Microinformáticos y Redes',
            year: '2020 - 2022',
            description: 'Aprendizaje de conocimientos básicos sobre diferentes campos de la informática como montaje de ordenadores, redes o sistemas operativos.'
        },
        {
            title: 'Grado Superior de Desarrollo de Aplicaciones Web',
            year: '2022 - 2024',
            description: 'Aprendizaje básico de lenguajes de programación bastante utilizados en la actualidad como Python y Java, además de los HTML, CSS y Javascript vitales para comenzar en el desarrollo de aplicaciones web'
        },
        {
            title: 'Máster en Desarrollo Web Full Stack',
            year: 2025,
            description: 'Repaso de tecnologías básicas en el desarrollo de aplicaciones web como HTML, CSS y Javascript y comienzo de aprendizaje de tecnologías tanto de frontend como de backend como son React y MongoDB.'
        }
    ]
    return (
        <section id="studies" className="studies">
            <div className='studies_title'>
                <SchoolIcon />
                <h1>Estudios</h1>
            </div>
            <ul className='studies_list'>
            {
                STUDIES.map((study, index) => (
                    <StudyCard key={index} title={study.title} year={study.year} description={study.description} />
                ))
            }
            </ul>
        </section>
    )
}
