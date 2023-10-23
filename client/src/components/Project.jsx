import classNames from 'classnames'

function Project({proj, loaded}){

    const delay = loaded ? 500 : 0
    const transformClass = loaded ? 'tanslate-x-0':'translate-x-[300%]'

    return (
        <section className={`border-black border-2 duration-500 ${transformClass} delay-${delay}`}>
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