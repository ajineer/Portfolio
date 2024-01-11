import './About.scss'
import AnimatedLetters from './AnimatedLetters'
import { useEffect, useState } from 'react'
import { faCss3, faHtml5, faReact, faPython, faGithub, faFigma} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import Loader from 'react-loaders'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=>{

        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    },[])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A','b','o','u','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a full stack software enginner thar recently graduated from the Flatiron school.
                    </p>
                    <p>
                        Befoere deciding to commit myself to learning software engineering, I worked as a mathematics tutor. 
                        I love problem solving but math became to0 easy, so i decided to switch gears to math's close neighbor computer science. 
                        Here I was confronted with more challenges, but that's what I love, learning to solve new problems I've never seen before.
                    </p>
                    <p>
                        In the future I hope to apply my previous math skills along with my newly aquired software engineering skills either as a 
                        front-end developer, back-end or both.
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faFigma} />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='ball-clip-rotate-multiple'/>
        </>
    )
}

export default About