import './Layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import LinkedList from './LinkedList.jsx';
import BinaryTree from './BinaryTree.jsx';
import Map from './Map.jsx';
import FL from './Typing.jsx'

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