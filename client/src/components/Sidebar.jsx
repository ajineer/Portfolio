import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBars, faCode, faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import mLogo from '../assets/images/mLogo4.svg'
import data from '../data/projectStore'
import { useState } from 'react'

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false)
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={mLogo} alt='logo'/>
            </Link>
            {/* <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color='#ED8E00'
                size="3x"
                className='hamburger-icon' /> */}
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='projects-link' to="/projects">
                    <FontAwesomeIcon icon={faCode} color='#4d4d4e'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href={data.links[0]} target="_blank" rel='noreferrer'>
                        <FontAwesomeIcon className='anchor-icon' icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a href={data.links[1]} target="_blank" rel='noreferrer'>
                        <FontAwesomeIcon className='anchor-icon' icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar