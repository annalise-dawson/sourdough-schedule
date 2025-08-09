import { useStarterSteps } from '../hooks/useStarterSteps'
import { StarterSteps } from '../../models/starter'
import { useState } from 'react'

export default function Starter() {
  const { data: steps, isLoading, error } = useStarterSteps()
  const [isChecked, setIsChecked] = useState<{ [key: number]: boolean }>({})

  if (isLoading) return <p>Preheating the oven...</p>
  if (error) return <p>Bread is burning, be right back!</p>

  function handleCheck(id: number) {
    setIsChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="starter-page">
      <h2 className="starter-page-title">Starter Schedule</h2>
      <div className="starter-steps">
        {steps.map((step: StarterSteps) => (
          <div key={step.id} className="starter-step">
            <p className="starter-step-day">
              <strong>Day {step.day}</strong>
            </p>
            <p className="starter-step-instruction">{step.instructions}</p>
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
