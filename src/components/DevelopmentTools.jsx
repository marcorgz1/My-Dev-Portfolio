import { HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, TailwindcssIcon, ToolsIcon } from '../components/Icons'
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
                    <CssIcon />
                    <JavascriptIcon />
                    <ReactIcon />
                    <TailwindcssIcon />
                </div>
            </div>
            <div className="databases">
                <h2>Databases</h2>
                <div className="databases_tools">
                    <CssIcon />
                    <JavascriptIcon />
                    <ReactIcon />
                    <TailwindcssIcon />
                </div>
            </div>
            
            <div className="other">
                <h2>Other tools</h2>
                <div className="other_tools">
                    <CssIcon />
                    <JavascriptIcon />
                    <ReactIcon />
                    <TailwindcssIcon />
                </div>
            </div>
        </section>
    )
}
