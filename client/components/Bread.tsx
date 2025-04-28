import { useSteps } from '../hooks/useSteps'
import { Steps } from '../../models/steps'
import { useState } from 'react'

const times = [
  { time: 1 },
  { time: 2 },
  { time: 3 },
  { time: 4 },
  { time: 5 },
  { time: 6 },
  { time: 7 },
  { time: 8 },
  { time: 9 },
  { time: 10 },
  { time: 11 },
  { time: 12 },
  { time: 13 },
  { time: 14 },
  { time: 15 },
  { time: 16 },
  { time: 17 },
  { time: 18 },
  { time: 19 },
  { time: 20 },
  { time: 21 },
  { time: 22 },
  { time: 23 },
  { time: 24 },
]

function add(num1: number, num2: number) {
  return num1 + num2
}

export default function Bread() {
  const { data: steps, isLoading, error } = useSteps()
  const [select, setSelect] = useState(9)

  if (isLoading) return <p>Preheating the oven...</p>
  if (error) return <p>Bread is burning, be right back!</p>

  function handleTime(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelect(e.target.value)
  }

  function convertTo12Hour(twentyfourhourtime: number) {
    const amOrPm =
      twentyfourhourtime === 24 ? 'am' : twentyfourhourtime >= 12 ? 'pm' : 'am'
    const hour = twentyfourhourtime % 12 === 0 ? 12 : twentyfourhourtime % 12
    return `${hour}${amOrPm}`
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
          <option value="select time" key="default">
            select time
          </option>
          {times.map((time) => (
            <option key={time.time} value={time.time}>
              {convertTo12Hour(Number(time.time))}
            </option>
          ))}
        </select>
      </div>
      <div className="steps">
        {steps.map((step: Steps) => (
          <div key={step.id} className="step">
            <p className="step-time">
              <strong>{add(Number(select), step.setTime)}am</strong>
            </p>
            <p className="step-instruction">{step.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
