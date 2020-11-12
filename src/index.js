import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Time } from './components/time.js'
// import Lorem from './components/lorem.js'

const Main = () => {
  const [time, setTime] = useState(0)
  
  const requestRef = useRef();
  const previousTimeRef = useRef();
  
  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      const now = new Date();
      
      //setTime(prevTime => (prevTime + deltaTime));
      setTime(prevTime => new Time(now));
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
  
  return <>
           <div id="services" className="services">
             <div className='vert-text'>
               <div className='container'>
                 <div className='row'>
                   <div className='col-md-6 col-md-offset-3 col-sm-12 text-center'>
                     <h1>{time.year}</h1>
                     <h3>今年はどのぐらい過ぎ去ったのだろう。</h3>
                   </div>
                 </div>

                 <div className='row'>
                   <div id="bar-graph"></div>
                 </div>

               </div>
             </div>
           </div>
         </>
}

ReactDOM.render(<Main />, document.getElementById('root'))
