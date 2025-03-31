import '../css/Projects.css'
import firstProjectImage from '../assets/first_project.png'

export function Projects() {
    return (
        <section className='projects'>
            <h1 className='projects_title'>Proyectos</h1>
            <div className='projects_container'>
                <div className='project_card'>
                    <h2 className='projects_container__card_title'>App Verificación Cuadros Istel</h2>
                    <p className='projects_container__card_description'>
                        Aplicación para administrar los cuadros de luz de una empresa en base a los clientes y a los requisitos de los mismos. 
                    </p>
                    <img src={firstProjectImage} alt="First project image" className='project_image' />
                </div>
                <div className='project_card'>
                    <h2 className='projects_container__card_title'>Proyecto 2</h2>
                    <p className='projects_container__card_description'>Descripción del proyecto 2.</p>
                </div>
            </div>
        </section>
    )
}
