import data from "../projectStore"
import AnimatedLetters from "./AnimatedLetters"
import Loader from "react-loaders"
import './Projects.scss'
import Project from './Project.jsx'

const Projects = () => {

    return (
        <>
            <div className="container proj">
                <h1> 
                    <AnimatedLetters strArray={"Projects".split("")}/>
                </h1>
                <div className="proj-container">
                    {data.projects.map((proj, idx) => {
                        return (
                            <Project key={idx} proj={proj} idx={idx}/>
                            )
                        })}
                </div>
            </div>
            <Loader type='ball-clip-rotate-multiple'/>
        </>
    )
}

export default Projects