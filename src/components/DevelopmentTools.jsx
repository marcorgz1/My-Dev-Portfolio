import { ToolsIcon, HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, TailwindcssIcon, NodejsIcon, ExpressIcon, MongodbIcon, MysqlIcon, GithubIcon, GitIcon, GithubToolIcon } from '../components/Icons'
import '../css/DevelopmentTools.css'

export function DevelopmentTools () {
    return (
        <section className="development_tools">
            <h1>
                <ToolsIcon />
                Herramientas
            </h1>
            <div className="frontend">
                <h2>Frontend</h2>
                <div className="frontend_tools">
                    <HtmlIcon />
                    <CssIcon />
                    <JavascriptIcon />
                    <ReactIcon />
                    <TailwindcssIcon />
                </div>
            </div>
            <div className="backend">
                <h2>Backend</h2>
                <div className="backend_tools">
                    <NodejsIcon />
                    <ExpressIcon />
                </div>
            </div>
            <div className="databases">
                <h2>Databases</h2>
                <div className="databases_tools">
                    <MongodbIcon />
                    <MysqlIcon />
                </div>
            </div>
            
            <div className="other">
                <h2>Other tools</h2>
                <div className="other_tools">
                    <GitIcon />
                    <GithubToolIcon />
                </div>
            </div>
        </section>
    )
}
