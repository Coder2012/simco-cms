import React from 'react';
import { Link } from 'gatsby';
import Masthead from '../masthead/Masthead'

import Styles from './header.module.scss'

class Header extends React.Component {
    constructor() {
        super()

        this.state = {
            navOpen: false
        }

        this.mastheadHandler = this.mastheadHandler.bind(this)
    }

    mastheadHandler () {
        console.log('masthead handler')
        this.setState(prevState => {
            return { navOpen: !prevState.navOpen };
        });
    }

    render () {

        const open = (this.state.navOpen) ? Styles.headerNavOpen : ''

        return ( 
            <section>
                <Masthead clickHandler={this.mastheadHandler}/>
                <nav className={[open, Styles.headerNav].join(' ')}>
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
}
 
export default Header;