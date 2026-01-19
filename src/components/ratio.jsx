import { useEffect, useMemo, useState } from 'react'
import CircleItem from './CircleItem'
import { continuedFraction, findNextFractionChange } from './continued-fraction'
import TweetItem from './TweetItem'
import WarningMessage from './warning-message'

const Remain = ({ time, onMilestoneChange }) => {
  const [flipped, setFlipped] = useState(false)
  const [degree, setDegree] = useState(2)
  const [degreeInput, setDegreeInput] = useState('2')
  const [warning, setWarning] = useState(false)

  const frac = continuedFraction(time.ratio, degree)
  const fracText = frac.toString()

  const nextChangeDate = useMemo(() => {
    if (!flipped) return null
    const nextRatio = findNextFractionChange(time.ratio, degree)
    if (nextRatio === null) return null
    const yearMs = time.nextNewYear.getTime() - time.thisNewYear.getTime()
    return new Date(time.thisNewYear.getTime() + nextRatio * yearMs)
  }, [degree, flipped, time.nextNewYear, time.ratio, time.thisNewYear])

  useEffect(() => {
    if (onMilestoneChange) {
      onMilestoneChange(
        nextChangeDate
          ? {
              nextDate: nextChangeDate,
              currentFraction: fracText,
            }
          : null,
      )
    }
  }, [fracText, nextChangeDate, onMilestoneChange])

  useEffect(() => {
    gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title,
    })
  }, [])

  function handleChange(event) {
    const s = event.target.value
    setDegreeInput(s)
    if (s === '') {
      setWarning(true)
      return
    }
    const n = parseInt(s, 10)
    if (!Number.isNaN(n) && n >= 0) {
      setWarning(false)
      setDegree(n)
    } else {
      setWarning(true)
    }
  }

  const frontContent = (
    <div>
      <span className="main-part">{Math.floor(time.ratio * 100)}</span>.
      <span className="">{String(Math.floor(((time.ratio * 100) % 1) * 10000000)).padStart(7, '0')}</span> %
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
      <TweetItem
        text={`今年の ${!flipped ? `${time.ratio * 100}%` : `${frac.numerator}/${frac.denominator}`} は終了しました。`}
      />
      {flipped ? (
        <p>
          この分数は{degree}次の連分数近似です。
          <input
            type="number"
            min="0"
            step="1"
            value={degreeInput}
            className="ratio-degree-input"
            onChange={handleChange}
          />
          次に変更
          {warning ? <WarningMessage>非負の整数を入力して下さい</WarningMessage> : ''}
        </p>
      ) : (
        <p>クリックで連分数近似が表示されます。</p>
      )}
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
