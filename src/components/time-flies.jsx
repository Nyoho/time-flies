import React, { useState } from 'react'
import { Time } from './time'
import Ratio from './ratio.jsx'
import CircleItem from './CircleItem'
import TweetItem from './TweetItem'

const TimeFlies = ({ time, onTimeClick, isTimeSlipped }) => {
  const [flipped, setFlipped] = useState(false)
  const progressPercent = (1 - time.remain) * 100
  const remainingPercent = time.remain * 100

  return (
    <div className={`time-flies ${isTimeSlipped ? 'time-slipped' : ''}`}>
      <div id="services" className="services">
        <div className="vert-text">
          <div className="container">
            <div className="row"
              onClick={onTimeClick}
              style={{ cursor: 'pointer' }}
            >
              <div className="col text-center">
                <h1>{time.year}</h1>
                <h3>{isTimeSlipped ? 'あの頃' : '今年'}はどのぐらい過ぎ去ったのだろう。</h3>
              </div>
            </div>

            <div className="row mt-5 mb-3">
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
                <div
                  className="border border-2 border-primary d-flex"
                  role="progressbar"
                  aria-label="今年の経過割合"
                  aria-valuenow={progressPercent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: '30px', fontSize: '1rem' }}
                >
                  <span
                    className="bg-primary text-black d-flex align-items-center justify-content-center small"
                    style={{ height: '28px', width: `${progressPercent}%` }}
                  >
                    {progressPercent.toFixed(7)}%
                  </span>
                  <span
                    className="d-flex align-items-center justify-content-center small"
                    style={{ height: '28px', width: `${remainingPercent}%` }}
                  >
                    {remainingPercent.toFixed(7)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="row justify-content-center"
              style={{ textAutospace: 'normal' }}>
              <CircleItem
                mainText=""
                subText={Time.getDateString(time.date) + '\n' + Time.getTimeString(time.date)}
                header={`${isTimeSlipped ? 'その' : '現在'}時刻`}
              ></CircleItem>

              <Ratio time={time} />

              <CircleItem
                mainText={Math.floor(time.remain * 100)}
                subText={'.' + String(Math.floor(((time.remain * 100) % 1) * 10000000)).padStart(7, '0') + ' %'}
                header="残り"
              >
                <TweetItem text={`${isTimeSlipped ? 'あの頃' : '今年'}も残すところあと ${time.remain * 100} パーセントです。`} />
              </CircleItem>

              <CircleItem mainText={Time.getTimeString(time.oneDay)} header="1日なら">
                <p>{isTimeSlipped ? 'あの頃' : '今年'}1年を1日(24時間)にたとえると、{isTimeSlipped ? 'その瞬間は' : '現在'}{Time.getTimeString(time.oneDay, 'ja')}です。</p>
                <TweetItem
                  text={`${isTimeSlipped ? 'そのときの1年' : '今年1年'}を1日24時間にたとえると、現在${Time.getTimeString(time.oneDay, 'ja')}です。`}
                />
              </CircleItem>

              <CircleItem subText={time.humanString} header="人類の歴史なら">
                <p>
                  {isTimeSlipped ? 'あの頃' : '今年'}1年を人類の歴史 (新人類, 20万年間) にたとえると、{isTimeSlipped ? 'その瞬間は' : '現在'}<span id="human">{time.humanString}</span>
                  です。
                </p>
                <TweetItem
                  text={`${isTimeSlipped ? 'あの頃' : '今年'}1年を人類の歴史 (新人類, 20万年間) にたとえると、現在${time.humanString}です。`}
                />
              </CircleItem>
            </div>
          </div>
        </div>
      </div>


    </div >
  )
}

export default TimeFlies
