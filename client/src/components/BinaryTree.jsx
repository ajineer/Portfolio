import BT from '../assets/images/BTree.svg'
import './BinaryTree.scss'

const BinaryTree = () => {
    return (
        <>
            <div className='bt-mask'></div>
            <img className='binary-tree' src={BT}/>
        </>
    )
}

export default BinaryTree