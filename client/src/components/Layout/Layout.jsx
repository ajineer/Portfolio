import './Layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import LinkedList from '../Background/LinkedList.jsx';
import BinaryTree from '../Background/BinaryTree.jsx';
import Map from '../Background/Map.jsx';
import FL from '../Background/Typing.jsx'

const Layout = () => {

    const code = [
        `function( ... ){`,
        '   for ( i=0; i<...){',
        `       ...`,
        `   }`,
        `   return 1`,
        `}`,
    ]

    return (
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                <LinkedList />
                <Outlet /> 
                <FL strArr={code} />
                <BinaryTree />
                <Map /> 
            </div>
        </div>
    )
}

export default Layout