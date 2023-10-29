import {useState} from 'react'

function Circle({url, idx}){
    let delay = 1000+idx*500
    const angle = 13*idx
    const [loaded, setLoaded] = useState(false)
    const rotateOutside = loaded ? {
        transform: `rotate(-${angle}deg)`,
        transition: 'transform 0.5s'
    } : {}
    const rotateInside = loaded ? {
        transform: `rotate(${angle}deg)`,
        transition: 'transform 0.5s'
    }:{}

    setTimeout(()=>{
        setLoaded(true)
    },delay)

    return (
        <div className={`flex z-0 bg-opacity-0 absolute items-center w-[300px] h-[300px] border-2 border-red-500 rounded-full`} 
            style={rotateOutside}>
            <img className='rounded-full' style={rotateInside} width={'35px'} height={'35px'} src={url}/>
        </div>
    )
}

export default Circle