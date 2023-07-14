import './style.css';
import LoginBtn from './LoginBtn';
import SignupBtn from './SignupBtn'

export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className="logo"><h1>AskaDoc</h1></div>
            <div className='restStuff'>
                <div className='NavEnd'>
                    <LoginBtn />
                    <SignupBtn />
                </div>
            </div>
        </div>
    )
}