import GithubIcon from '../assets/github.svg'
import LinkedinIcon from '../assets/linkedin.svg'

export function Presentation () {
    return (
        <section className='flex justify-center items-center'>
            <div>
                <img src="" alt="Foto perfil" />
            </div>
            <div>
                <h1 className='text-4xl font-bold inline-block bg-gradient-to-r text-transparent bg-clip-text from-yellow-200 to-purple-500'>
                    Hola, soy Marco
                </h1>
                <p>Disponible</p>
                <span>Junior Full Stack Developer</span>
                <p className='text-wrap'>
                    Desarrollador Web Full Stack especializado en crear webs innovadoras 
                    y únicas haciendo uso de diversas tecnologías.
                </p>
                <div>
                    <img src={GithubIcon} alt="Github icon" />
                    <img src={LinkedinIcon} alt="Linkedin icon" />
                </div>
            </div>
        </section>
    )
}
