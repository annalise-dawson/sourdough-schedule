import { useEffect, useState } from 'react'
import { useSteps } from '../hooks/useSteps'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const { data: steps, isLoading, error } = useSteps()
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  useEffect(() => {
    if (!isActive) return

    if (seconds <= 0) {
      alert('Time for the next step')
      setIsActive(false)
      return
    }

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [seconds, isActive])

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600)
      .toString()
      .padStart(2, '0')
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0')
    const secs = (timeInSeconds % 60).toString().padStart(2, '0')
    return `${hours}:${minutes}:${secs}`
  }

  const startTimer = () => {
    setSeconds(steps[currentStepIndex]?.timer)
    setIsActive(true)
  }

  const nextStep = () => {
    setSeconds(0)
    setIsActive(false)
    if (currentStepIndex == steps.length - 1) {
      setCurrentStepIndex(0)
    } else {
      setCurrentStepIndex(currentStepIndex + 1)
    }
  }

  if (isLoading) return <p>Preheating the oven...</p>
  if (error) return <p>Bread is burning, be right back!</p>

  return (
    <>
      <div className="timer-step">
        <p className="timer-step-text">
          {steps[currentStepIndex]?.instructions}
        </p>
        <button onClick={nextStep} className="timer-step-next">
          Next Step →
        </button>
      </div>

      <p className="timer">
        {seconds !== null ? formatTime(seconds) : '00:00:00'}
      </p>
      <button onClick={startTimer} className="button1">
        Push to start timer
      </button>
    </>
  )
}
