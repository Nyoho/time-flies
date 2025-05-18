import { createRoot } from 'react-dom/client'
import React, { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { Time } from './components/time.js'
import TimeFlies from './components/time-flies.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
const TimeSlipModal = lazy(() => import('./components/TimeSlipModal'))

const Main = () => {
  const [timeOffset, setTimeOffset] = useState(0);
  const [time, setTime] = useState(new Time(new Date()));
  const [inputDateTime, setInputDateTime] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    const currentAdjustedTime = new Date(new Date().getTime() + timeOffset);
    // const formattedDateTime = currentAdjustedTime.toISOString().slice(0, 16);
    const localISOString = new Date(currentAdjustedTime.getTime() - currentAdjustedTime.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16);
    setInputDateTime(localISOString);
    setIsModalOpen(true);
    setIsPaused(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPaused(false);
  };

  const requestRef = useRef();

  const animate = () => {
    if (!isPaused) {
      const now = new Date();
      const adjustedTime = new Date(now.getTime() + timeOffset);
      setTime(new Time(adjustedTime));
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  const handleTimeSlip = () => {
    if (inputDateTime) {
      const targetTime = new Date(inputDateTime);
      const now = new Date();
      const newOffset = targetTime.getTime() - now.getTime();
      setTimeOffset(newOffset);
      setIsModalOpen(false);
      setIsPaused(false);
    }
  };

  const resetToCurrentTime = () => {
    setTimeOffset(0);
    setIsModalOpen(false);
    setIsPaused(false);
  };

  const isTimeSlipped = timeOffset !== 0;

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div className="container">
      <TimeFlies
        time={time}
        onTimeClick={handleOpenModal}
        isTimeSlipped={isTimeSlipped}
      />

      {isTimeSlipped && (
        <div className="time-slip-indicator">
          <span className="badge bg-warning text-dark">タイムスリップ中</span>
          <button
            className="btn btn-sm btn-outline-secondary ms-2"
            onClick={resetToCurrentTime}
          >
            現在時刻に戻る
          </button>
        </div>
      )}

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

    </div>
  );
};

createRoot(document.getElementById('root')).render(<Main />)
