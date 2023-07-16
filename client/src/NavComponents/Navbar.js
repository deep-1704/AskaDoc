import './style.css';
import LoginBtn from './LoginBtn';
import SignupBtn from './SignupBtn';
import UserProfileBtn from './usrProfileBtn';

export default function Navbar() {
    let ls = <div className='NavEnd'><LoginBtn /><SignupBtn /></div>
    let up = <div className='NavEnd'><UserProfileBtn username="Deep"/></div>
    return (
        <div className='Navbar'>
            <div className="logo"><h1>AskaDoc</h1></div>
            <div className='restStuff'>
                {false ? up:ls}
            </div>
        </div>
    )
}