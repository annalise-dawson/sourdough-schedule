import { useStarterSteps } from '../hooks/useStarterSteps'

export default function Starter() {
  const { data: steps, isLoading, error } = useStarterSteps()

  if (isLoading) return <p>Preheating the oven...</p>
  if (error) return <p>Bread is burning, be right back!</p>

  return (
    <div className="bread-container">
      <h2 className="bread-schedule-title">Starter Schedule</h2>
      <div className="steps">
        {steps.map((step) => (
          <div key={step.id} className="step">
            <p className="step-time">
              <strong>Day {step.day}</strong>
            </p>
            <p className="step-instruction">{step.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
