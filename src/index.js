import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
// import Something from './components/something.js'
// import Lorem from './components/lorem.js'

const Main = () => {
  const [time, setTime] = useState(0)
 
  const requestRef = useRef();
  const previousTimeRef = useRef();
  
  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      
      setTime(prevTime => (prevTime + deltaTime));
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
  
  return <div>{Math.round(time)}</div>
}

ReactDOM.render(<Main />, document.getElementById('root'))
