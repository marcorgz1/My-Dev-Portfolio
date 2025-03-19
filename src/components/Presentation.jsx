import pfp from '../assets/pfp.jpg'
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import '../css/Presentation.css'

export function Presentation () {
    return (
        <section>
            <div>
                <img src={pfp} alt="Foto perfil" width={250} className='rounded' />
            </div>
            <div className='personal_info'>
                <h1 className='text-4xl font-bold inline-block bg-gradient-to-r text-transparent bg-clip-text from-yellow-200 to-purple-500'>
                    Hola, soy Marco
                </h1>
                <div className='gradient_button'>
                    <button>Disponible</button>
                </div>
                <span>Junior Full Stack Developer</span>
                <p className='text-wrap'>
                    Desarrollador Web Full Stack especializado en crear webs innovadoras 
                    y únicas haciendo uso de diversas tecnologías.
                </p>
                <div className='social_buttons'>
                    <UseAnimations animation={github} size={32} strokeColor='white' />
                    <UseAnimations animation={linkedin} size={32} strokeColor='white' />
                </div>
            </div>
        </section>
    )
}
