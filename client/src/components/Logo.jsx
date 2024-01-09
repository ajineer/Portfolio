import './Logo.scss'
import mLogo from '../assets/images/mLogo4.svg'

const Logo = () => {
    
    return (

        <div className='logo-container'>
            <img className='solid-logo' src={mLogo}/>
        </div>
    )
}

export default Logo