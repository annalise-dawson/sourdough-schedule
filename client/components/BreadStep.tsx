import { Steps } from '../../models/steps'

type BreadStepProps = {
  step: Steps
  stepTime: number
  isExpanded: boolean
  onToggle: () => void
  convertTo12Hour: (time: number) => string
}

export default function BreadStep({
  step,
  stepTime,
  isExpanded,
  onToggle,
  convertTo12Hour,
}: BreadStepProps) {
  return (
    <div className="bread-step">
      <p className="bread-step-time">
        <strong>{convertTo12Hour(stepTime)}</strong>
      </p>
      <p className="bread-step-instruction">{step.instructions}</p>

      <div className="bread-step-footer">
        <button
          className="bread-step-expand-button"
          onClick={onToggle}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Hide Details' : 'Show More'}
        </button>
      </div>

      {isExpanded && step.expandedInstructions && (
        <div className="bread-step-details">
          <p>{step.expandedInstructions}</p>
        </div>
      )}
    </div>
  )
}
