import { useState } from 'react';
import { ToolsIcon, HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, TailwindcssIcon, MongodbIcon, MysqlIcon, GitIcon, GithubToolIcon, NodejsIcon, ExpressIcon } from '../components/Icons'
import '../css/DevelopmentTools.css'

const DEVELOPMENT_TOOLS = [
    {
        title: 'Frontend',
        technologies: [HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, TailwindcssIcon]
    },
    {
        title: 'Backend',
        technologies: [NodejsIcon, ExpressIcon]
    },
    {
        title: 'Bases de datos',
        technologies: [MongodbIcon, MysqlIcon]
    },
    {
        title: 'Otras herramientas',
        technologies: [GitIcon, GithubToolIcon]
    },
]

export function DevelopmentTools () {
    // Estado para guardar la ventana en la que nos encontramos
    // 0 = Frontend (se muestra por defecto)
    // 1 = Backend
    // 2 = Bases de datos
    // 3 = Otras
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="development_tools" className="development_tools__container">
            <h1>
                <ToolsIcon />
                Herramientas
            </h1>
            <div className="development_tools__header">
            {
                DEVELOPMENT_TOOLS.map((development_tool, index) => (
                    <button 
                        key={index}
                        // Actualizar valor del estado con el de la ventana en la que se ha hecho click
                        onClick={setActiveTab(index)}
                        // Comprobar si el valor del estado es igual que el índice que tiene el botón
                        // cumple condición -> agregar clase "active" al botón
                        // NO cumple condición -> no agregar ninguna clase al botón
                        className={activeTab === index ? 'active' : ''}
                        >
                        {development_tool.title}
                    </button>
                ))
            }
            </div>
            <div className="development_tools__technologies">
            {
                // Mostrar tecnologías de la categoría correspondiente
                // DEVELOPMENT_TOOLS[0] -> tecnologías frontend
                // DEVELOPMENT_TOOLS[1] -> tecnologías backend
                // ...
                DEVELOPMENT_TOOLS[activeTab].technologies.map((Technology, index) => (
                    <span className='development_tool__technology' key={index}>
                        <Technology />
                    </span>
                ))
            }
            </div>
        </section>
    )
}
