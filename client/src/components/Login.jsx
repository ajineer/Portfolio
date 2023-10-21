import { useState } from "react"
import useStore from '../store'

function Login(){

    const {user, setUser, projects, setProjects, skills, setSkills} = useStore()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleChange(e){
        const { name, value } = e.target
        setFormData({...formData, [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('/api/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((r)=>{
            if (r.ok){
                r.json().then((user) =>
                {
                    setUser(user)
                    setProjects(user.projects)
                    setSkills(user.skills)
                }).then(console.log(user))
            }
        })
    }

    return (
        <form className='flex flex-col bg-gray-300 m-auto w-fit p-2' onSubmit={(e) => handleSubmit(e)}>
            <input
                value = {formData.username}
                type='text'
                name='username'
                required={true}
                onChange={handleChange}
            ></input>
            <input
                value = {formData.password}
                type = 'password'
                name='password'
                required={true}
                onChange={handleChange}
            ></input>
            <input
                value='Login'
                type="Submit"
                onSubmit={()=>handleSubmit()}>
            </input>
        </form>
    )
}

export default Login