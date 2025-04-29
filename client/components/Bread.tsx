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
  return Number(num1) + Number(num2)
}

export default function Bread() {
  const { data: steps, isLoading, error } = useSteps()
  const [select, setSelect] = useState(9)

  if (isLoading) return <p>Preheating the oven...</p>
  if (error) return <p>Bread is burning, be right back!</p>

  function handleTime(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelect(Number(e.target.value))
  }

  function convertTo12Hour(twentyfourhourtime: number) {
    const amOrPm =
      twentyfourhourtime >= 12 && twentyfourhourtime < 24 ? 'pm' : 'am'

    let hour = Math.floor(twentyfourhourtime)
    hour = hour % 12 === 0 ? 12 : hour % 12

    const minute = Math.round((twentyfourhourtime % 1) * 60)

    const formattedMinute = minute < 10 ? `0${minute}` : minute

    return `${hour}:${formattedMinute}${amOrPm}`
  }

  return (
    <div className="container">
      <h2 className="section-title">Bread Schedule</h2>

      <div className="picker">
        <h3 className="picker-title">Pick a start-time</h3>
      </div>

      <div className="picker-select">
        <select
          id="start-time"
          name="start-time"
          onChange={handleTime}
          className="dropdown"
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

      <div className="card-list">
        {steps.map((step: Steps) => (
          <div key={step.id} className="card">
            <p className="card-heading">
              <strong>
                {convertTo12Hour(add(Number(select), Number(step.setTime)))}
              </strong>
            </p>
            <p className="card-text">{step.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

//Need to add a next day
