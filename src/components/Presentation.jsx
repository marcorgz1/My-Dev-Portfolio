import pfp from '../assets/pfp.jpg'
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';

import '../css/Presentation.css'

export function Presentation() {
    return (
        <section>
            <div>
                <img src={pfp} alt="Foto perfil" width={250} className='rounded' />
            </div>
            <div className='personal_info'>
                <h1>
                    Hola, soy Marco
                </h1>
                <div className='gradient_button'>
                    <button>Disponible</button>
                </div>
                <span>Junior Full Stack Developer</span>
                <p>
                    Desarrollador Web Full Stack apasionado en crear webs innovadoras
                    y únicas haciendo uso de diversas tecnologías. Siempre con ganas de aprender
                    nuevas tecnologías. Siempre intentando desarrollar aplicaciones web manetibles y escalables,
                    haciendo un gran esfuerzo en el desarrollo y la experiencia del usuario en las mismas.
                </p>
                <div className='social_buttons'>
                    <button className="button">
                        <UseAnimations animation={github} size={32} strokeColor='white' />
                        <p className="text">Github</p>
                    </button>
                </div>
                <div >
                    <UseAnimations animation={linkedin} size={32} strokeColor='white' />
                </div>
            </div>
        </section>
    )
}
