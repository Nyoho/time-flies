import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { continuedFraction } from './continued-fraction'
import WarningMessage from './warning-message'

const Remain = props => {
  const [flipped, setFlipped] = useState(false);
  const [degree, setDegree] = useState(2);
  const [warning, setWarning] = useState(false);
  
  const time = props.time;
  const frac = continuedFraction(time.ratio, degree);

  function handleChange(event) {
    const s = event.target.value;
    if (s == '') {
      setWarning(true);
      return
    }
    const n = parseInt(s);
    if (!isNaN(n) && n >= 0) {
      setWarning(false)
      setDegree(n)
    } else {
      setWarning(true)
    }
  }

  return <>
           <div className="col-md-2 col-sm-6 text-center ">
             <div className="service-item">
               <div className="animate-switch-container" onClick={() => setFlipped(!flipped)}>

                 <div className="circle-box-container">
                   <CSSTransition in={!flipped} timeout={500} classNames="flip" unmountOnExit>
                     <div className='circle-box'>
                       <div className="cell">
                         <div><span className="main-part">{Math.floor(time.ratio * 100)}</span>.<span className="">{String(Math.floor((time.ratio * 100 % 1)*10000000)).padStart(7, "0")}</span> %</div>
                       </div>
                     </div>
                   </CSSTransition>

                   <CSSTransition in={flipped} timeout={500} classNames="flip" unmountOnExit>
                     <div className='circle-box'>
                       <div className="cell">
                         <div><span className="main-part" style={{fontSize: '48px'}}><sup>{frac.numerator}</sup>&frasl;<sub>{frac.denominator}</sub></span></div>
                       </div>
                     </div>
                   </CSSTransition>
                 </div>

               </div>
               <h4>終了</h4>
               <div className="tweet" ngswitchon="sw">
                 <a href="https://twitter.com/NeXTSTEP2OSX/"></a>
                 <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                 <div>
                   <a href={`https://twitter.com/intent/tweet?url=https%3A%2F%2F${window.location.hostname}&hashtags=TimeFlies&text=今年の ${!flipped ? time.ratio*100 + '%25' : `${frac.numerator}/${frac.denominator}`} は終了しました。`}>
                     <i className="fa fa-twitter fa-2x"></i>
                   </a>
                   {flipped ?
                    <p>この分数は{degree}次の連分数近似です。
                      <input type='text'
                             defaultValue={degree || '2'}
                             size='3'
                              onChange={handleChange}
                       />次に変更
                      { warning ? <WarningMessage>非負の整数を入力して下さい</WarningMessage> : '' }
                     </p>
                     :
                     <p>クリックで連分数近似が表示されます。</p>
                    }
                  </div>
                </div>
              </div>
            </div>
          </>
}

export default Remain;
