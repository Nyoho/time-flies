import React, { useState } from 'react'
//import continuousFraction from './continuous-fraction'
var Fraction = require('./fraction').Fraction
var continuousFraction = require('./continuous-fraction').continuousFraction

const Remain = props => {
  const [flipped, setFlipped] = useState(false);
  const [degree, setDegree] = useState(2);
  
  const time = props.time;
  const frac = continuousFraction(time.ratio, degree);

  return <>
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
                       <div><span className="main-part" style={{fontSize: '48px'}}><sup>{frac.numerator}</sup>&frasl;<sub>{frac.denominator}</sub></span></div>
                     </div>
                   </div>
                 </div>

               </div>
               <h4>終了</h4>
               <div className="tweet" ngswitchon="sw">
                 <a href="https://twitter.com/NeXTSTEP2OSX/"></a>
                 <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                 <p>
                   <a href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Ftime-flies.herokuapp.com&hashtags=TimeFlies&text=今年の ${!flipped ? time.ratio*100 + '%25' : `${frac.numerator}/${frac.denominator}`} は終了しました。`}>
                     <i className="fa fa-twitter fa-2x"></i>
                   </a>
                   {flipped ?
                    <p>この分数は{degree}次の連分数近似です。
                      <input type='text'
                             value={degree}
                             size='3'
                              onChange={e => setDegree(e.target.value)}
                       />次に変更
                     </p>
                     :
                     <p>クリックで連分数近似が表示されます。</p>
                    }
                  </p>
                </div>
              </div>
            </div>
          </>
}

export default Remain;
