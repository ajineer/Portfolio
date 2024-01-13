import { useEffect, useState } from "react"
import './ForLoop.scss'

const Type = ({ string }) => {
    
    const [typed, setTyped] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTyped(string.slice(0, typed.length + 1))
        }, 30)

        return () => clearTimeout(timeout)
    }, [typed, string])
    
    return (
        <span>{typed}<br/></span>
    )
}

export default Type