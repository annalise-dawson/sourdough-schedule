import { useStarterSteps } from '../hooks/useStarterSteps'
import { StarterSteps } from '../../models/starter'

export default function Starter() {
  const { data: steps, isLoading, error } = useStarterSteps()

  if (isLoading) return <p>Preheating the oven...</p>
  if (error) return <p>Bread is burning, be right back!</p>

  return (
    <div className="container">
      <h2 className="section-title">Starter Schedule</h2>
      <div className="card-list">
        {steps.map((step: StarterSteps) => (
          <div key={step.id} className="card">
            <p className="card-heading">
              <strong>Day {step.day}</strong>
            </p>
            <p className="card-text">{step.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
