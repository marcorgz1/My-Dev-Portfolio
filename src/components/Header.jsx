import { Navbar } from './Navbar'
import '../css/Header.css'

export function Header () {
    return (
        <main className='header'>
            <div>
                <span>Marco</span>    
            </div>     
            <Navbar />
            <div></div>       
        </main>
    )
}
