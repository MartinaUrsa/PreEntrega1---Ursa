import './NavBar.css';
import '../CartWidget/CartWidget';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="primary-header">
            <section className="nav">
                <div className="socials">
                    <a href="https://www.instagram.com/kaczuragro/"><FontAwesomeIcon icon={faInstagram} style={{color: "#000000",}} /></a>
                    <a href="https://www.facebook.com/kaczuragro.com.ar/"><FontAwesomeIcon icon={faFacebook} style={{color: "#000000",}} /></a>
                </div>

                <ul className="navbar" id="navbar" data-visible="false">
                    <li><a href="index.html" class="active">INICIO</a></li>
                    <li><a href="#">PRODUCTOS</a></li>
                    <li><a href="#">CONTACTO</a></li>
                    <li><a href="#">NOSOTROS</a></li>
                </ul>

                <div class="icons">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} />
                    <CartWidget />
                </div>
            </section>

            <div className="logo">
                <h1>KACZUR</h1>  
                <h2>Quincho, jardín & imanes</h2>

            <button className="mobile-nav-toggle" aria-controls="navbar" aria-expanded="false">
                <span className="sr-only">Menu</span>
            </button>

            </div>
        </nav>
    )
}

export default NavBar;