import { useState, useEffect, useRef } from 'react'
import ReactFileUpload from 'react-file-upload'

function ProjectForm(){

    const [formData, setFormData] = useState({
        image: null,
        title: '',
        description: '',
        start_date: '',
        finish_date: '',
        github: '',
        demo: '',
    })

    const handleChange = (event) => {
        if(event.target.files && event.target.files[0]){
            setFormData({...formData, 
                image: event.target.files[0],
                [event.target.name]:event.target.value
            })
        }else{
            setFormData({...formData,
                [event.target.name]: event.target.value
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('/api/project', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(r => r.json())
        .then(data => console.log(data))
    }


    return(
        <form className='flex flex-col w-fit p-2 bg-gray-300' onSubmit={(e) => handleSubmit(e)}>
            <label>Submit New Project</label>
            {/* <input
                className='bg-pink-500 mt-2 mb-2'
                name='image'
                type='file'
                onChange={handleChange}
            /> */}
            <ReactFileUpload 
                onChange={handleChange}
            />
            <input
                className='bg-pink-500 mt-2 mb-2'
                name='title'
                type='text'
                value={formData.title}
                onChange={handleChange}
            />
            <input
                className='bg-pink-500 mt-2 mb-2'
                name='description'
                type='text'
                value={formData.description}
                onChange={handleChange}
            />
            <input
                className='bg-pink-500 mt-2 mb-2'
                name='start_date'
                type='month'
                value={formData.start_date}
                onChange={handleChange}
            />
            <input
                className='bg-pink-500 mt-2 mb-2'
                name='finish_date'
                type='month'
                value={formData.finish_date}
                onChange={handleChange}
            />
            <input
                className='bg-pink-500 mt-2 mb-2'
                name='github'
                type='text'
                value={formData.github}
                onChange={handleChange}
            />
            <input
                className='bg-pink-500 mt-2 mb-2'
                name='demo'
                type='text'
                value={formData.demo}
                onChange={handleChange}
            />
            <input 
                type='submit'
                value='Submit'
                onSubmit={handleSubmit}
            />
        </form>
    )
}

export default ProjectForm