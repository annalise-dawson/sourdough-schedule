import { useSteps } from '../hooks/useSteps'
import { Steps } from '../../models/steps'
import { useState } from 'react'

const times = [
  { time: 1000 },
  { time: 1100 },
  { time: 1200 },
  { time: 1300 },
  { time: 1400 },
  { time: 1500 },
  { time: 1600 },
  { time: 1700 },
  { time: 1800 },
  { time: 1900 },
  { time: 2000 },
  { time: 2100 },
]

function add(num1: number, num2: number) {
  return num1 + num2
}

export default function Bread() {
  const { data: steps, isLoading, error } = useSteps()
  const [select, setSelect] = useState('0900')

  if (isLoading) return <p>Preheating the oven...</p>
  if (error) return <p>Bread is burning, be right back!</p>

  function handleTime(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelect(e.target.value)
  }

  return (
    <div className="bread-container">
      <h2 className="bread-schedule-title">Bread Schedule</h2>
      <div className="pick-time">
        <h3 className="time-picker-title">Pick a start-time</h3>
      </div>
      <div className="start-selector">
        <select
          id="start-time"
          name="start-time"
          onChange={handleTime}
          className="drop-down"
        >
          <option value="0900" key="default">
            0900
          </option>
          {times.map((time) => (
            <option key={time.time} value={time.time}>
              {time.time}
            </option>
          ))}
        </select>
      </div>
      <div className="steps">
        {steps.map((step: Steps) => (
          <div key={step.id} className="step">
            <p className="step-time">
              <strong>{add(Number(select), step.setTime)}</strong>
            </p>
            <p className="step-instruction">{step.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
