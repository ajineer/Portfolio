import data from "../../data/projectStore"
import AnimatedLetters from "../Background/AnimatedLetters"
import Loader from "react-loaders"
import './Projects.scss'
import '../Background/AnimatedLetters.scss'
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Projects = () => {   

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    },[])

    return (
        <>
            <div className="container proj">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Projects".split("")}
                            idx={15}
                        />
                    </h1>
                    <div className="projects">
                        {data.projects.map((proj, idx) => {
                            return (
                                <div key={proj.id} className="project-card">
                                    <AnimatedLetters 
                                        letterClass={letterClass} 
                                        strArray={proj.name.split("")} 
                                        idx={15}
                                        />
                                    
                                    <img src={proj.image}/>
                                    <div className="proj-tech">
                                        {proj.stack.map((t, index) => {
                                            return (
                                                <img key={index} src={t}/>
                                            )
                                        })}
                                    </div>
                                    <p>{proj.description}</p>
                                    <div className="proj-links">
                                        <a href={proj.github} target="_blank" rel='noreferrer'>
                                            <FontAwesomeIcon className='anchor-symbol' icon={faGithub} color='#4d4d4e'/>
                                        </a>
                                        <a href={proj.demo} target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon className="anchor-symbol" icon={faYoutube} color='#4d4d4e'/>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Loader className='loader' type='ball-clip-rotate-multiple'/>
        </>
    )
}

export default Projects