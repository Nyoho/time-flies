import { createRoot } from 'react-dom/client'
import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Time } from './components/time.js'
import TimeFlies from './components/time-flies.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'

const Main = () => {
  const [time, setTime] = useState(new Time(new Date()))

  const requestRef = useRef()
  const previousTimeRef = useRef()

  const animate = (time) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current
      const now = new Date()

      //setTime(prevTime => (prevTime + deltaTime));
      setTime((prevTime) => new Time(now))
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  return <TimeFlies time={time} />
}

createRoot(document.getElementById('root')).render(<Main />)
