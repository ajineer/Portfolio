import React, { useEffect, useState } from 'react';
import './ForLoop.scss';
import Type from './Type';

const ForLoop = () => {
  const code = [
    `function( ... ){`,
    '   for ( i=0; i<...){',
    `       ...`,
    `   }`,
    `   return 1`,
    `}`,
  ];
  const [array, setArray] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setArray((prev) => {
        const currentIndex = prev.length;
        const nextLine = code[currentIndex];
        return currentIndex < code.length ? [...prev, nextLine] : prev;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [array, code]);

  return (
    <div className='forLoop-container'>
      {array.map((string, idx) => (
        <pre key={idx}>
          <Type key={idx} string={string} />
        </pre>
      ))}
    </div>
  );
};

export default ForLoop;
