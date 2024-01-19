import { useEffect, useState } from "react"
import './Typing.scss'

const Type = ({ string }) => {
    
    const [typed, setTyped] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTyped(string.slice(0, typed.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
    }, [typed, string])
    
    return (
        <span>{typed}</span>
    )
}

export default Type