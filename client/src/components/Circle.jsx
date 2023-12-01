import {useState} from 'react'

function Circle({url, idx}){
    let delay = 1000+idx*500
    const angle = 11*idx
    const [loaded, setLoaded] = useState(false)

    setTimeout(()=>{
        setLoaded(true)
    },delay)

    const rotateOutside = {
        transform: `rotate(-${angle}deg)`,
        transition: `transform 0.5s`
    }
    const rotateInside = {
        transform: `rotate(${angle}deg)`,
        transition: `transform 0.5s`
    }

    return (
        <div className={`flex z-0 bg-opacity-0 absolute items-center w-[260px] h-[260px] rounded-full`} 
            style={rotateOutside}>
            <img className={`z-10 rounded-full transition duration-250 ${loaded?'opacity-100':'opacity-0'}`} style={rotateInside} width={'23px'} height={'23px'} src={url}/>
        </div>
    )
}

export default Circle