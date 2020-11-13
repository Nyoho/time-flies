import React from 'react'

const TimeFlies = props => {
  const time = props.time;
  
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

export default TimeFlies;
