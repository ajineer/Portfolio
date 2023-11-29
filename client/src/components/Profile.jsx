import Circle from './Circle'

function Profile(){
    
    const techURL = [
        '/Javascript.png',
        '/React.png',
        '/Tailwind.png',
        '/Python.jpeg', 
        '/Flask.png',  
        '/JSON.jpeg',  
        '/github.png', 
        '/CSS.png',       
        '/HTML.png'
    ]
    
    return(
        <div className="flex items-center justify-center rounded-full w-[300px] h-[300px] m-auto">
            <div className='z-10 absolute flex overflow-clip items-center border-2 border-white rounded-full h-[190px] w-[190px]'>
                <img className='h-full w-full' src='../../public/profile_picture.jpeg'/>
            </div>
            {techURL.map((url, idx) => {
                return (
                    <Circle key={idx} url={url} idx={idx} />
                )
            })}
        </div>
    )
}

export default Profile