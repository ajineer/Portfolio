import {useState, useEffect} from 'react'

function Profile(){
    
    const techURL = [
        '../../public/Javascript.png',
        '../../public/React.png',
        '../../public/Tailwind.png',
        '../../public/Python.jpeg',
        '../../public/Flask.png',
        '../../public/JSON.jpeg',
        '../../public/github.png',]

    const [loaded, setLoaded] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        },500)
    },[])
    
    
    return(
        <div className="flex items-center justify-center rounded-full border-2 border-Yellow-500 w-[300px] h-[300px] m-auto">
            <div>
                <img className='rounded-full' width={'90%'} height={'100%'} src='../../public/profile_picture.jpeg'/>
            </div>
        </div>
    )
}

export default Profile