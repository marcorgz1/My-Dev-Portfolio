import { ToolsIcon, HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, TailwindcssIcon, MongodbIcon, MysqlIcon, GitIcon, GithubToolIcon } from '../components/Icons'
import '../css/DevelopmentTools.css'

const DEVELOPMENT_TOOLS = [
    {
        title: 'Frontend',
        technologies: [HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, TailwindcssIcon]
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
    return (
        <section id="development_tools" className="development_tools__container">
            <h1>
                <ToolsIcon />
                Herramientas
            </h1>
            <div className="development_tools">
            {
                DEVELOPMENT_TOOLS.map((development_tool, index) => (
                    <div key={index} className='development_tool__card'>
                        <h2>{development_tool.title}</h2>
                        <div className="technologies__container">
                        {
                            development_tool.technologies.map((Technology, index) => (
                                <span key={index}>
                                    <Technology />
                                </span>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
            </div>
        </section>
    )
}
