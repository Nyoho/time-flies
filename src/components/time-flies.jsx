import React, { useState } from 'react'
import { Time } from './time'
import Ratio from './ratio.jsx'

const TimeFlies = props => {
  const [flipped, setFlipped] = useState(false);
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

                 <div className="row">

                   <div className="col-md-2 col-md-offset-1 col-sm-12 text-center">
                     <div className="service-item">

                       <div className="circle-box-container">
                         <div className="circle-box">
                           <div className="cell" onClick={() => ''}>
                             {Time.getDateString(time.date)}<br/>
                             {Time.getTimeString(time.date)}
                           </div>
                         </div>

                       </div>
                       <h4>現在時刻</h4>
                     </div>
                   </div>

                   <Ratio time={time}/>

                   <div className="col-md-2 col-sm-6 text-center">
                     <div className="service-item">
                       <div className="circle-box-container">
                         <div className="circle-box">
                           <div className="cell">
                             <div><span className="main-part">{Math.floor(time.remain * 100)}</span>.<span className="">{String(Math.floor((time.remain * 100 % 1)*10000000)).padStart(7, "0")}</span> %</div>
                           </div>
                         </div>
                       </div>
                       <h4>残り</h4>
                       <div className="tweet">
                         <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                         <p><a href={`https://twitter.com/intent/tweet?url=https%3A%2F%2F${window.location.hostname}&hashtags=TimeFlies&text=今年も残すところあと ${time.remain*100} パーセントです。`}> 
                            <i className="fa fa-twitter fa-2x"></i></a></p>
                       </div>
                     </div>
                   </div>


                   <div className="col-md-2 col-sm-6 text-center">
                     <div className="service-item">
                       <div className="circle-box-container">
                         <div className="circle-box">
                           <div className="cell">
                             <div>
                               <span className="main-part">
                                 {Time.getTimeString(time.oneDay)}
                               </span>
                             </div>
                           </div>
                         </div>
                       </div>
                       <h4>1日なら</h4>
                       <p>今年1年を1日(24時間)にたとえると、現在{Time.getTimeString(time.oneDay, 'ja')}です。</p>
                       <div className="tweet">
                         <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                         <p><a href={`https://twitter.com/intent/tweet?url=https%3A%2F%2F${window.location.hostname}&hashtags=TimeFlies&text=今年1年を1日24時間にたとえると、現在${Time.getTimeString(time.oneDay, 'ja')}です。`}> 
                                                                                                <i className="fa fa-twitter fa-2x"></i></a></p>
                       </div>
                     </div>
                   </div>


                   <div className="col-md-2 col-sm-6 text-center">
                     <div className="service-item">
                       <div className="circle-box-container">
                         <div className="circle-box">
                           <div className="cell">
                             <div>{time.humanString}</div>
                           </div>
                         </div>
                       </div>

                       <h4>人類の歴史なら</h4>
                       <p>今年1年を人類の歴史 (新人類, 20万年間) にたとえると、現在<span id="human">{time.humanString}</span>です。</p>
                       <div className="tweet">
                         <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                         <p><a href={`https://twitter.com/intent/tweet?url=https%3A%2F%2F${window.location.hostname}&hashtags=TimeFlies&text=今年1年を人類の歴史 (新人類, 20万年間) にたとえると、現在${time.humanString}です。`}> 
                     <i className="fa fa-twitter fa-2x"></i></a></p>
                       </div>
                     </div>
                   </div>

                 </div>
               </div>
             </div>
           </div>
         </>
}

export default TimeFlies;
