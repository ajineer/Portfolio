import { Link } from "react-scroll"
import data from "../projectStore"
function Nav(){
    return (
        <nav className='flex bg-secondary z-30'>
          {data.pageLinks.map(link => {return (
            <Link
            className='text-md border-2 border-black h-[100%] w-fit hover:bg-primary'
            to={link.link}
            spy={true} smooth={true} offset={0} duration={500} 
            >
              <span className='p-2'>
                {link.text}
              </span>
            </Link>
          )})}
        </nav>
    )
}

export default Nav