import { Link } from "react-scroll"
import data from "../projectStore"
function Nav(){
    return (
        <nav className='child sticky top-0 mt-4 flex flex-col z-30 bg-accent1 space-x-2 justify-center items-center'>
          <span className="ml-2 mb-1 text-lg">Navigation</span>
          <section className="flex mt-2 ml-2">
          {data.pageLinks.map((link, idx) => {return (
            <Link
            key={idx}
            className={`w-fit text-md h-[100%] hover:bg-primary ${idx===0?'border-t-4 border-l-4 border-l-secondary border-t-secondary': null}`}
            to={link.link}
            spy={true} smooth={true} offset={0} duration={500} 
            >
              <span className='p-2'>
                {link.text}
              </span>
            </Link>
          )})}
        </section>
        </nav>
    )
}

export default Nav