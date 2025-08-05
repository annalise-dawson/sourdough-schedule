import { Steps } from '../../models/steps'
import { useSteps } from '../hooks/useSteps'

export default function Recipe() {
  const { data: steps, isLoading, error } = useSteps()

  if (isLoading) return <p>Preheating the oven...</p>
  if (error) return <p>Bread is burning, be right back!</p>

  return (
    <div className="recipe">
      <h2 className="recipe-title">Sourdough Recipe</h2>

      <h3 className="recipe-subheading">What You Need to Know</h3>
      <div className="recipe-info">
        <p>
          Before you start, make sure your starter is active. Feed it the day
          before so it&apos;s ready to use in the morning.
        </p>
        <span></span>
        <p>
          When you cover your dough, use a wet tea towel to stop it from drying
          out. It&apos;s also best to keep it in a warm spot! If it&apos;s cold
          where you are, you might need to let the dough rise for longer.
        </p>
      </div>

      <h3 className="recipe-subheading">Ingredients</h3>
      <div className="recipe-info">
        <ul className="recipe-ingredients">
          <li>100g sourdough starter</li>
          <li>350g warm water</li>
          <li>500g flour</li>
          <li>10g salt</li>
        </ul>
      </div>

      <h3 className="recipe-subheading">Instructions</h3>

      <div className="recipe-steps">
        {steps.map((step: Steps) => (
          <p key={step.id}>
            <strong>{step.id}.</strong> {step.expandedInstructions}
            <br></br>
            <br></br>
          </p>
        ))}
      </div>
    </div>
  )
}
