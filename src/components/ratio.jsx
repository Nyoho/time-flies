import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { continuedFraction } from './continued-fraction'
import WarningMessage from './warning-message'
import CircleItem from './CircleItem'

const Remain = (props) => {
  const [flipped, setFlipped] = useState(false)
  const [degree, setDegree] = useState(2)
  const [warning, setWarning] = useState(false)

  const time = props.time
  const frac = continuedFraction(time.ratio, degree)

  useEffect(() => {
    gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title,
    })
  }, [])

  function handleChange(event) {
    const s = event.target.value
    if (s == '') {
      setWarning(true)
      return
    }
    const n = parseInt(s)
    if (!isNaN(n) && n >= 0) {
      setWarning(false)
      setDegree(n)
    } else {
      setWarning(true)
    }
  }

  const frontContent = (
    <div>
      <span className="main-part">{Math.floor(time.ratio * 100)}</span>.
      <span className="">
        {String(Math.floor(((time.ratio * 100) % 1) * 10000000)).padStart(7, '0')}
      </span>{' '}
      %
    </div>
  )

  const backContent = (
    <div>
      <span className="main-part" style={{ fontSize: '48px' }}>
        <sup>{frac.numerator}</sup>&frasl;<sub>{frac.denominator}</sub>
      </span>
    </div>
  )

  const handleFlip = () => {
    setFlipped(!flipped)
    trackCustomEvent('ratio_click', 'ratio_action', flipped)
  }

  return (
    <CircleItem
      header="終了"
      mainText=""
      subText=""
      flippable={true}
      flipped={flipped}
      onFlip={handleFlip}
      frontContent={frontContent}
      backContent={backContent}
    >
      <div className="tweet" ngswitchon="sw">
        <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
        <div>
          <a
            href={`https://twitter.com/intent/tweet?url=https%3A%2F%2F${window.location.hostname}&hashtags=TimeFlies&text=今年の ${!flipped ? time.ratio * 100 + '%25' : `${frac.numerator}/${frac.denominator}`} は終了しました。`}
          >
            <i className="fa fa-twitter fa-2x"></i>
          </a>
          {flipped ? (
            <p>
              この分数は{degree}次の連分数近似です。
              <input type="text" defaultValue={degree || '2'} size="3" onChange={handleChange} />
              次に変更
              {warning ? <WarningMessage>非負の整数を入力して下さい</WarningMessage> : ''}
            </p>
          ) : (
            <p>クリックで連分数近似が表示されます。</p>
          )}
        </div>
      </div>
    </CircleItem>
  )
}

const trackCustomEvent = (eventCategory, eventAction, eventLabel = null) => {
  gtag('event', eventCategory, {
    event_category: eventCategory,
    event_action: eventAction,
    event_label: eventLabel,
  })
}

export default Remain
