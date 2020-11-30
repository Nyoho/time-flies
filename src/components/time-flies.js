import React, { useState } from 'react'
import { Time } from 'components/time'

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
                           <div className="cell">
                             <div>{Time.getDateString(time.date)}</div>
                             <div>{Time.getTimeString(time.date)}</div>
                           </div>
                         </div>

                       </div>
                       <h4>現在時刻</h4>
                     </div>
                   </div>


                   <div>
                     <div className="col-md-2 col-sm-6 text-center ">
                       <div className="service-item">
                         <div className="animate-switch-container" onClick={() => setFlipped(!flipped)}>

                           <div className="circle-box-container">
                             <div className={'circle-box ' + (flipped ? 'ng-enter' : 'ng-leave')}>
                               <div className="cell">
                                 <div><span className="main-part">{Math.floor(time.ratio * 100)}</span>.<span className="">{String(Math.floor((time.ratio * 100 % 1)*10000000)).padStart(7, "0")}</span> %</div>
                               </div>
                             </div>

                             <div className={'circle-box ' + (flipped ? 'ng-leave' : 'ng-enter')}>
                               <div className="cell">
                                 <div><span className="main-part" style={{fontSize: '48px'}}><sup>{time.fraction.numerator}</sup>&frasl;<sub>{time.fraction.denominator}</sub></span></div>
                               </div>
                             </div>
                           </div>

                         </div>
                         <h4>終了</h4>
                         <div className="tweet" ngswitchon="sw">
                           <a href="https://twitter.com/NeXTSTEP2OSX/"></a>
                           <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                           <p>
                             <a href={`https://twitter.com/intent/tweet?url=http%3A%2F%2Ftime-flies.herokuapp.com&hashtags=TimeFlies&text=今年の ${!flipped ? time.ratio*100 + '%25' : `${time.fraction.numerator}/${time.fraction.denominator}`} は終了しました。`}>
                               <i className="fa fa-twitter fa-2x"></i>
                             </a>
                           </p>
                         </div>
                       </div>
                     </div>
                   </div>

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
                         <a href="http://twitter.com/NeXTSTEP2OSX/"></a>
                         <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                         <p><a href={`https://twitter.com/intent/tweet?url=http%3A%2F%2Ftime-flies.herokuapp.com&hashtags=TimeFlies&text=今年も残すところあと ${time.remain*100} パーセントです。`}> 
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
                       <p>今年1年を1日24時間にたとえると、現在{Time.getTimeString(time.oneDay, 'ja')}です。</p>
                       <div className="tweet">
                         <a href="http://twitter.com/NeXTSTEP2OSX/"></a>
                         <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                         <p><a href={`https://twitter.com/intent/tweet?url=http%3A%2F%2Ftime-flies.herokuapp.com&hashtags=TimeFlies&text=今年1年を1日24時間にたとえると、現在${Time.getTimeString(time.oneDay, 'ja')}です。`}> 
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
                         <a href="https://twitter.com/NeXTSTEP2OSX/"></a>
                         <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                         <p><a href={`https://twitter.com/intent/tweet?url=http%3A%2F%2Ftime-flies.herokuapp.com&hashtags=TimeFlies&text=今年1年を人類の歴史 (新人類, 20万年間) にたとえると、現在${time.humanString}です。`}> 
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
