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

                 <div className="row">

                   <div className="col-md-2 col-md-offset-1 col-sm-12 text-center">
                     <div className="service-item">

                       <div className="circle-box-container">
                         <div className="circle-box">
                           <div className="cell">
                             <div> 'now | date:yyyy年MM月dd日' </div>
                             <div> 'now | date:HH:mm:ss.sss' </div>
                           </div>
                         </div>

                       </div>
                       <h4>現在時刻</h4>
                     </div>
                   </div>


                   <div>
                     <div className="col-md-2 col-sm-6 text-center ">
                       <div className="service-item">
                         <div className="animate-switch-container" ngclick="sw=1-sw" ngswitchon="sw">

                           <div className="circle-box-container">
                             <div className="circle-box" ngswitch='default'>
                               <div className="cell">
                                 <div><span className="main-part"> 'intRatio' </span>.<span className=""> 'decRatio' </span> %</div>
                               </div>
                             </div>

                             <div className="circle-box" ngswitchwhen="1">
                               <div className="cell">
                                 <div><span className="main-part" style={{fontSize: '48px'}}><sup> 'fracNumerator' </sup>&frasl;<sub> 'fracDenominator' </sub></span></div>
                               </div>
                             </div>
                           </div>
                         </div>
                         <h4>終了</h4>
                         <div className="tweet" ngswitchon="sw">
                           <a href="http://twitter.com/NeXTSTEP2OSX/"></a>
                           <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                           <p>
                             <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Ftime-flies.herokuapp.com&hashtags=TimeFlies&text=今年の 'ratioText' は終了しました。">
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
                             <div><span className="main-part">  'intRemain' </span>.<span className=""> 'decRemain' </span> %</div>
                           </div>
                         </div>
                       </div>
                       <h4>残り</h4>
                       <div className="tweet">
                         <a href="http://twitter.com/NeXTSTEP2OSX/"></a>
                         <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                         <p><a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Ftime-flies.herokuapp.com&hashtags=TimeFlies&text=今年も残すところあと  'remain*100 | number:4'  パーセントです。"> 
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
                               <span className="main-part"> 'oneDay | date:HH:mm:ss' </span>. 'oneDay | date:sss' </div>
                           </div>
                         </div>
                       </div>
                       <h4>1日なら</h4>
                       <p>今年1年を1日24時間にたとえると、現在 'oneDay | date:HH時mm分ss秒' です。</p>
                       <div className="tweet">
                         <a href="http://twitter.com/NeXTSTEP2OSX/"></a>
                         <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                         <p><a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Ftime-flies.herokuapp.com&hashtags=TimeFlies&text=今年1年を1日24時間にたとえると、現在 'oneDay | date:HH時mm分ss秒' です。"> 
                                                                                                <i className="fa fa-twitter fa-2x"></i></a></p>
                       </div>
                     </div>
                   </div>


                   <div className="col-md-2 col-sm-6 text-center">
                     <div className="service-item">
                       <div className="circle-box-container">
                         <div className="circle-box">
                           <div className="cell">
                             <div> 'human' </div>
                           </div>
                         </div>
                       </div>

                       <h4>人類の歴史なら</h4>
                       <p>今年1年を人類の歴史 (新人類, 20万年間) にたとえると、現在<span id="human"> 'human' </span>です。</p>
                       <div className="tweet">
                         <a href="https://twitter.com/NeXTSTEP2OSX/"></a>
                         <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                         <p><a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Ftime-flies.herokuapp.com&hashtags=TimeFlies&text=今年1年を人類の歴史 (新人類, 20万年間) にたとえると、現在 'human' です。"> 
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
