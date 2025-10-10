import pfp from '../assets/pfp.jpg';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';

import '../css/Presentation.css'

export function Presentation() {
    return (
        <section id='presentation' className='presentation'>
            <div>
                <img src={pfp} alt="Foto perfil" width={250} className='presentation_image' />
            </div>
            <div className='personal_info'>
                <h1 className='welcome_text'>
                    Hola, soy Marco
                </h1>
                <div className='gradient_button'>
                    <button>Disponible</button>
                </div>
                <span>Junior Frontend Developer</span>
                <p>
                    Desarrollador Web Full Stack apasionado en crear webs innovadoras
                    y únicas haciendo uso de diversas tecnologías. Siempre con ganas de aprender
                    nuevas tecnologías. Siempre intentando desarrollar aplicaciones web mantenibles y escalables,
                    haciendo un gran esfuerzo en el desarrollo y la experiencia del usuario en las mismas.
                </p>
                <div className='presentation_social_buttons'>
                    <a href='https://github.com/marcorgz1?tab=repositories' target='_blank' className="social_button">
                        <UseAnimations animation={github} size={32} strokeColor='white' />
                        <span>Github</span>
                    </a>
                    <a href='https://www.linkedin.com/in/marco-rodriguez-rey-b082361b9/' target='_blank' className="social_button">
                        <UseAnimations animation={linkedin} size={32} strokeColor='white' />
                        <span>Linkedin</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
