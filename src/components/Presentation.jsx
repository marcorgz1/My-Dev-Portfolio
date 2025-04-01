import pfp from '../assets/pfp.jpg'
import UseAnimations from 'react-useanimations';
import download from 'react-useanimations/lib/download'
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import myCV from '../assets/Mi CV.pdf'

import '../css/Presentation.css'

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = myCV;
    link.download = 'Mi CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export function Presentation() {
    return (
        <section className='presentation'>
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
                <span>Junior Full Stack Developer</span>
                <p>
                    Desarrollador Web Full Stack apasionado en crear webs innovadoras
                    y únicas haciendo uso de diversas tecnologías. Siempre con ganas de aprender
                    nuevas tecnologías. Siempre intentando desarrollar aplicaciones web mantenibles y escalables,
                    haciendo un gran esfuerzo en el desarrollo y la experiencia del usuario en las mismas.
                </p>
                <div className='presentation_social_buttons'>
                    <button className='social_button' onClick={handleDownload}>                        
                        <UseAnimations animation={download} size={32} strokeColor='white' />
                        <span>Descarga mi CV</span>                        
                    </button>
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
