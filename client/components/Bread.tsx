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
  const [openSteps, setOpenSteps] = useState<{ [key: number]: boolean }>({})

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

  function toggleStep(id: number) {
    setOpenSteps((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="bread-page">
      <h2 className="bread-page-title">Bread Schedule</h2>

      <div className="bread-picker">
        <h3 className="bread-picker-title">Pick a start-time</h3>
      </div>

      <div className="bread-picker-select-wrapper">
        <select
          id="start-time"
          name="start-time"
          onChange={handleTime}
          className="bread-picker-select"
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

      <div className="bread-steps">
        {steps.map((step: Steps) => (
          <div key={step.id} className="bread-step">
            <p className="bread-step-time">
              <strong>
                {convertTo12Hour(add(Number(select), Number(step.setTime)))}
              </strong>
            </p>
            <p className="bread-step-instruction">{step.instructions}</p>

            <div className="bread-step-footer">
              <button
                className="bread-step-expand-button"
                onClick={() => toggleStep(step.id)}
              >
                {openSteps[step.id] ? 'Hide Details' : 'Show More'}
              </button>
            </div>

            {openSteps[step.id] && step.expandedInstructions && (
              <div className="bread-step-details">
                <p>{step.expandedInstructions}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

//Need to add a next day
//Add option to expand for more detailed steps
//Add tick box option
