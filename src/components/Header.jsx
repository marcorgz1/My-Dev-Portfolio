import { Navbar } from './Navbar'
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import '../css/Header.css'

export function Header () {
    return (
        <main className='header'>
            <div></div>     
            <Navbar />
            <div className='social_buttons'>
                <UseAnimations animation={github} size={32} strokeColor='white' />
                <UseAnimations animation={linkedin} size={32} strokeColor='white' />
            </div>
        </main>
    )
}
