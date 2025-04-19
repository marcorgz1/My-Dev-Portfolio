import { Link } from 'react-router-dom'
import '../css/Navbar.css'

export function Navbar() {
    const NAV_SECTIONS = [
        {
            id: 1,
            title: 'Inicio',
            url: '#'
        },
        {
            id: 2,
            title: 'Estudios',
            url: '#studies'
        },
        {
            id: 3,
            title: 'Herramientas',
            url: '#development_tools'
        },
        {
            id: 4,
            title: 'Proyectos',
            url: '#projects'
        },
        {
            id: 5,
            title: 'Contacto',
            url: '#contact'
        }
    ]

    return (
        <nav className='navbar'>
            <ul className='navbar_sections'>

                {
                    NAV_SECTIONS.map((section) => (
                        <li key={section.id}>
                            <a href={section.url}>{section.title}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
