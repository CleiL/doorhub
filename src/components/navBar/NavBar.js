import './NavbarStyle.css';
import Logo from '../../assets/logo.svg';

export default function NavBar() {
    return (
        <nav className='navBar'>
            <div className='navBarLogoEmpresa'>
                <img src={ Logo } alt="Logo" />
            </div>
            <ul className='navBarList'>
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Features</a></li>
                <li><a>Contact</a></li>
                <li><a>Blog</a></li>
            </ul>
            <button className='navBarButton' type='button'>
                Contact Us
            </button>
        </nav>
    )
}