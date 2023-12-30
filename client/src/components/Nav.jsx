import { Link } from "react-scroll"
import data from "../projectStore"
import Insignia from "./Insignia"
function Nav(){
    return (
      <nav className="parent flex sticky flex-col w-fit p-2 ml-2 mt-2 lg:top-0 lg:flex-row lg:justify-evenly lg:w-full lg:m-0 bg-black">
          <Insignia/>
          <section className="child flex flex-col w-fit lg:w-3/4 lg:justify-evenly lg:flex lg:flex-row lg:flex-wrap">
            <Link 
              className="text-xl text-white hover:bg-secondary hover:rounded-2xl p-1"
              to="/top"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              >About</Link>
            <Link 
              className="text-xl text-white hover:bg-secondary hover:rounded-2xl p-1"
              to="/projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              >Projects</Link>
            <Link
              className="text-xl text-white hover:bg-secondary hover:rounded-2xl p-1"
              to="/resume"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              >Resume
            </Link>
            <Link 
              className="text-xl text-white hover:bg-secondary hover:rounded-2xl p-1"
              to="/contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              >Contact</Link>
            </section>
        </nav>
    )
}

export default Nav