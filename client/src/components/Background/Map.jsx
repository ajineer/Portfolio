import Mp from "../../assets/images/Map.svg"
import "./Map.scss"


const Map = () => {
    return (
        <div className='map-wrapper'>
            <div className='map-mask'></div>
            <img className='map' src={Mp}/>
        </div>
    )
}

export default Map