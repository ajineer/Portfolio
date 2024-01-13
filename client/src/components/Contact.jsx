import Loader from 'react-loaders'
import './Contact.scss'
import AnimatedLetters from './AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {

    const [letterClass, setLetterClass] = useState("text-animate")
    const refForm = useRef()

    useEffect(()=>{

        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    },[])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'gmail',
                'template_afmcaw5',
                refForm.current,
                'M5vCAsdv5lAk82EFV'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={'Contact Me'.split("")} idx={15}/>
                    </h1>
                    <p>
                        I'm interested in internships, full-time, start-ups, and entry-level opportunities. However, 
                        if you have questions or requests don't hesitate to contact me using the form below. 
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required />                            
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div> 
            </div>
            <Loader type='ball-clip-rotate-multiple'/>
        </>
    )
}

export default Contact