import React, { useEffect, useState } from 'react';
import './Typing.scss';
import Type from './Type.jsx'

const ForLoop = ({strArr}) => {
  
  const [array, setArray] = useState([]);

  useEffect(() => {

    const timeOut = setTimeout(() => {
      setArray((prev) =>{
        const currentIndex = prev.length
        const nextLine = strArr[currentIndex]
        return currentIndex < strArr.length ? [...prev, nextLine] : prev
      })
    },800)
    return () => clearTimeout(timeOut)
  },[array, strArr])
    

  return (
    <div className='typing-container'>
      {array.map((string, idx) => (
        <pre key={idx}>
          <Type string={string}/>
        </pre>
      ))}
    </div>
  );
};

export default ForLoop;
