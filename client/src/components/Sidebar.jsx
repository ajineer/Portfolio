import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faAngleDoubleLeft, faCode, faEnvelope, faHome, faLink, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import mLogo from '../assets/images/mLogo4.svg'

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={mLogo} alt='logo'/>
            </Link>
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
                <NavLink exact="true" activeclassname="active" className='projects' to="/projects">
                    <FontAwesomeIcon icon={faCode} color='#4d4d4e'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                
            </ul>
        </div>
    )
}

export default Sidebar