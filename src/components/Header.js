import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return ( 
        <section>
            <h1>Simco</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us/">About Us</Link></li>
                    <li><Link to="/properties/">Properties</Link></li>
                    <li><Link to="/developments/">Developments</Link></li>
                    <li><Link to="/news/">News</Link></li>
                    <li><Link to="/contact-us/">Contact Us</Link></li>
                </ul>
            </nav>
        </section>
     );
}
 
export default Header;