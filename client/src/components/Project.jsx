function Project({proj}){
    return (

        <section className="border-black border-2 bg-">
            <svg className='border-red-500 border-2'>
                <image width='100%' height='100%' href={proj.image}/>
            </svg>
            <span>
                {proj.name}
            </span>
            <div className="flex">
            {proj.stack.map((url, idx) =>
                <img width='10%' height='10%' key={idx} src={url}/>
                )}
            </div>
        </section>
    )
}

export default Project