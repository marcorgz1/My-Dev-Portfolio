import { SunIcon, GithubIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Navbar () {
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
            title: 'Proyectos',
            url: '#projects'
        },
        {
            id: 4,
            title: 'Sobre Mí',
            url: '#about-me'
        },
        {
            id: 5,
            title: 'Contacto',
            url: '#contact'
        }
    ]

    return (
        <nav className='flex justify-between items-center gap-24 mt-4'>
        {
            NAV_SECTIONS.map((section) => (
                <Link key={section.id} to={section.url}>
                    {section.title}
                </Link>
            ))
        }
            <div className='flex items-center gap-6'>
                <SunIcon />
                <GithubIcon />
            </div>
        </nav>
    )
}
