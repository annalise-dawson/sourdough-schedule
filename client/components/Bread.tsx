import { useSteps } from '../hooks/useSteps'
import { Steps } from '../../models/steps'
import { useState } from 'react'
import BreadStep from './BreadStep'

export default function Bread() {
  const { data: steps, isLoading, error } = useSteps()
  const [startTime, setStartTime] = useState(9)
  const [isChecked, setIsChecked] = useState<{ [key: number]: boolean }>({})
  const [expandedStep, setExpandedStep] = useState<{ [key: number]: boolean }>(
    {},
  )

  const times = []
  for (let i = 0; i < 24; i++) {
    times.push(i)
  }

  if (isLoading) return <p>Preheating the oven...</p>
  if (error) return <p>Bread is burning, be right back!</p>

  function handleTime(e: React.ChangeEvent<HTMLSelectElement>) {
    setStartTime(Number(e.target.value))
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
    setExpandedStep((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  function handleCheck(id: number) {
    setIsChecked((prev) => ({
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
            <option key={time} value={time}>
              {convertTo12Hour(Number(time))}
            </option>
          ))}
        </select>
      </div>

      <div className="bread-steps">
        {startTime !== null &&
          steps.map((step: Steps) => (
            <div className="bread-step" key={step.id}>
              <BreadStep
                step={step}
                stepTime={startTime + step.setTime}
                isExpanded={!!expandedStep[step.id]}
                onToggle={() => toggleStep(step.id)}
                convertTo12Hour={convertTo12Hour}
              />
              <input
                type="checkbox"
                checked={!!isChecked[step.id]}
                onChange={() => handleCheck(step.id)}
                className="bread-step-checkbox"
              />
              Step done!
            </div>
          ))}
      </div>
    </div>
  )
}

//Need to add a next day
//Add tick box option
