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
        <nav className='navbar'>
            <ul className='navbar_sections'>

                {
                    NAV_SECTIONS.map((section) => (
                        <li key={section.id}>
                            {section.title}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
