import { SunIcon, GithubIcon } from 'lucide-react'

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
        <nav className='flex justify-between items-center max-w-full mt-4'>
            <div></div>
            <ul className='flex items-center gap-4 font-semibold'>

            {
                NAV_SECTIONS.map((section) => (
                    <li key={section.id} className='cursor-pointer hover:text-purple-300 transition-colors'>
                        {section.title}
                    </li>
                ))
            }
            </ul>
            <div className='flex items-center gap-6'>
                <SunIcon className='cursor-pointer hover:text-purple-300 transition-colors' />
                <GithubIcon className='cursor-pointer hover:text-purple-300 transition-colors' />
            </div>
        </nav>
    )
}
