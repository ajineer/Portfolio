import Mp from "../assets/images/Map.svg"
import "./Map.scss"


const Map = () => {
    return (
        <>
            <div className='map-mask'></div>
            <img className='map' src={Mp}/>
        </>
    )
}

export default Map