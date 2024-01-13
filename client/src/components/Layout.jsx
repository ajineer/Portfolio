import './Layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import LL from '../assets/images/LinkedList.svg'
import ForLoop from '../assets/images/ForLoop.svg'
import BT from '../assets/images/BTree.svg'
import Map from '../assets/images/Map.svg'
import FL from './ForLoop.jsx'

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                <div className='LL-mask'></div>
                <img className='LinkedList' src={LL}/>
                <Outlet /> 
                {/* <img className='for-loop' src={ForLoop} /> */}
                <FL />
                <div className='bt-mask'>Hello World!</div>
                <img className='binary-tree' src={BT}/>
                <div className='map-mask'></div>
                <img className='map' src={Map}/>
            </div>
        </div>
    )
}

export default Layout