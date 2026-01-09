import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Time } from './components/time.js'
import TimeFlies from './components/time-flies.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
const TimeSlipModal = lazy(() => import('./components/TimeSlipModal'))

const Main = () => {
  const [timeOffset, setTimeOffset] = useState(0)
  const [time, setTime] = useState(new Time(new Date()))
  const [inputDateTime, setInputDateTime] = useState('')
  const [isPaused, setIsPaused] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    const currentAdjustedTime = new Date(Date.now() + timeOffset)
    // const formattedDateTime = currentAdjustedTime.toISOString().slice(0, 16);
    const localISOString = new Date(currentAdjustedTime.getTime() - currentAdjustedTime.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16)
    setInputDateTime(localISOString)
    setIsModalOpen(true)
    setIsPaused(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsPaused(false)
  }

  const requestRef = useRef()

  const animate = useCallback(() => {
    if (!isPaused) {
      const now = new Date()
      const adjustedTime = new Date(now.getTime() + timeOffset)
      setTime(new Time(adjustedTime))
    }
    requestRef.current = requestAnimationFrame(animate)
  }, [isPaused, timeOffset])

  const handleTimeSlip = () => {
    if (inputDateTime) {
      const targetTime = new Date(inputDateTime)
      if (isNaN(targetTime.getTime())) return
      const now = new Date()
      const newOffset = targetTime.getTime() - now.getTime()
      setTimeOffset(newOffset)
      setIsModalOpen(false)
      setIsPaused(false)
    }
  }

  const resetToCurrentTime = () => {
    setTimeOffset(0)
    setIsModalOpen(false)
    setIsPaused(false)
  }

  const isTimeSlipped = timeOffset !== 0

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [animate])

  return (
    <>
      <TimeFlies
        time={time}
        onTimeClick={handleOpenModal}
        isTimeSlipped={isTimeSlipped}
        onResetTime={resetToCurrentTime}
      />

      <Suspense fallback={<div>Loading...</div>}>
        <TimeSlipModal
          isModalOpen={isModalOpen}
          inputDateTime={inputDateTime}
          setInputDateTime={setInputDateTime}
          handleCloseModal={handleCloseModal}
          handleTimeSlip={handleTimeSlip}
          resetToCurrentTime={resetToCurrentTime}
        />
      </Suspense>

      <div id="about" className="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <h2>光陰、矢のごとし。</h2>
              <p className="lead">時間が過ぎ去りゆくのは、まるで矢のようであります。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="callout intro">
        <div className="vert-text">
          <h1>Time flies.</h1>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <ul className="list-inline">
                <li><a href="http://twitter.com/NeXTSTEP2OSX/"><i className="fa fa-twitter fa-3x" /></a></li>
                <li><a href="http://facebook.com/Nyoho"><i className="fa fa-facebook fa-3x" /></a></li>
              </ul>
              <p>Fork me <a href="https://github.com/Nyoho/time-flies">Nyoho/time-flies</a></p>
              <hr />
              <p>
                Copyright &copy; <a href="https://nyoho.jp">Nyoho</a> 2013-2026.
                テンプレートは <a href="http://startbootstrap.com/stylish-portfolio">Stylish Portfolio</a> からいただきました。
                Photo by <a href="https://www.flickr.com/photos/wordsnpix/6143515789/">Richard Cahan</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<Main />)
