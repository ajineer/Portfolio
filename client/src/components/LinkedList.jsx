import LL from '../assets/images/LinkedList.svg'
import './LinkedList.scss'

const LinkedList = () => {

    return (
        <div className='LL-container'>
            <div className='mask'></div>
            <img className='LinkedList' src={LL}/>
        </div>
    )
}

export default LinkedList