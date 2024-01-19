import data from "../projectStore"
import AnimatedLetters from "./AnimatedLetters"
import Loader from "react-loaders"
import './Projects.scss'
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Projects = () => {

    const [current, setCurrent] = useState(0)
    function next() {
        setCurrent((prev) => prev === data.projects.length-1 ? 0 : prev+1)
    }    
    function prev() {
        setCurrent((prev) => prev === 0? data.projects.length-1: prev-1)
    }    

    return (
        <>
            <div className="container proj">
                <div className="text-zone">
                    <h1> 
                        <AnimatedLetters strArray={"Projects".split("")}/>
                    </h1>
                    <div className="proj-container">
                        <div className="proj-content">
                            <img src={data.projects[current].image}/>
                            <p>{data.projects[current].description}</p>
                        </div>
                        <div className="proj-links">
                            <a href={data.projects[current].github} target="_blank" rel='noreferrer'>
                                <FontAwesomeIcon className='anchor-icon' icon={faGithub} color='#4d4d4e'/>
                            </a>
                            <a href={data.projects[current].youtube} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="anchor-icon" icon={faYoutube} color='#4d4d4e'/>
                            </a>
                        </div>
                    </div>
                    <div className="buttons">
                        <FontAwesomeIcon className='button one' onClick={() => {next()}} icon={faArrowLeft} color="#fff"/>
                        <FontAwesomeIcon className='button two' onClick={() => {prev()}} icon={faArrowRight} color="#fff"/>
                    </div>
                </div>
            </div>
            <Loader type='ball-clip-rotate-multiple'/>
        </>
    )
}

export default Projects