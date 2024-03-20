import './Home.scss'
import { Link } from "react-router-dom"
import mLogo from '../../assets/images/mLogo4.svg'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../Background/AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'r', 'k']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br/>
                        <span className={`${letterClass} _13`}>I</span> 
                        <span className={`${letterClass} _14`}>'m</span> 
                        <img 
                            src={mLogo}
                        />
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={nameArray} 
                            idx={15}
                        />
                        <br />
                    </h1>
                    <h2 classname='tech-stacks'>Full Stack Developer / Python / Javascript</h2>
                    <Link to="/contact" className="flat-button">Contact Me</Link>
                </div>
            </div>
            <Loader className='loader' type='ball-clip-rotate-multiple'/>
        </>
    )
}

export default Home
