import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBoxOpen, faClose } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import './Projects.scss'

const Project = ({ proj, idx }) => {

    return (
        <div className={`proj_${idx}`} key={idx}>
            <img src={proj.image}/>
        </div>
    )
}

export default Project