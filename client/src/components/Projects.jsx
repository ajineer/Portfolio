import data from "../projectStore"
import AnimatedLetters from "./AnimatedLetters"
import Loader from "react-loaders"
import './Projects.scss'
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Projects = () => {

    const [selProj, setSelProj] = useState(data.projects[0])

    return (
        <>
            <div className="container proj">
                <div className="text-zone">
                    <h1> 
                        <AnimatedLetters strArray={"Projects".split("")}/>
                    </h1>
                    <img src={selProj.image}/>
                    <FontAwesomeIcon icon={faArrowLeft} color="#fff"/>
                    <FontAwesomeIcon icon={faArrowRight} color="#fff"/>
                </div>
            </div>
            <Loader type='ball-clip-rotate-multiple'/>
        </>
    )
}

export default Projects