import {Link} from "react-router-dom"; 
import {useState} from "react";
import "../css/Navigation.css"; 

const Navigation = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };

    return (
        <nav id="main-nav">
            <a id="toggle-nav" onClick={toggleMenu} href="#">
                {menuOpen?(<p>&#8963;</p>):(<p>&#8964;</p>)}
                </a>
            <ul className={menuOpen?"columns":"hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/listings">Listings</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
    
    
}; 

export default Navigation;