import React, { useEffect, useState } from 'react';
import './Typing.scss';
import Type from './Type.jsx'

const ForLoop = ({strArr}) => {
  
  const [array, setArray] = useState([]);
  const [delay, setDelay] = useState(0);

  useEffect(() => {

    const timeOut = setTimeout(() => {
      setArray((prev) =>{
        const currentIndex = prev.length
        const nextLine = strArr[currentIndex]
        setDelay(nextLine?.length)
        return currentIndex < strArr.length ? [...prev, nextLine] : prev
      })
    },(100*delay))
    return () => clearTimeout(timeOut)
  },[array, strArr])
    

  return (
    <div className='typing-container'>
      {array.map((string, idx) => (
        <pre key={idx}>
          <Type string={string}/><br/>
        </pre>
      ))}
    </div>
  );
};

export default ForLoop;
