import './Layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import LL from '../assets/images/LinkedList.svg'
import ForLoop from '../assets/images/ForLoop.svg'
import BT from '../assets/images/BTree.svg'

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                <img className='LinkedList' src={LL}/>
                <Outlet /> 
                <img className='for-loop' src={ForLoop} />
                <img className='binary-tree' src={BT}/>
            </div>
        </div>
    )
}

export default Layout