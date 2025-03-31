import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className="header">
        <div className="header-text">
          <h1>SCHEDULE YOUR BREAD</h1>
          <p>Don&apos;t let it burn!</p>
        </div>
      </div>
      <div className="select">
        <div className="select-header">
          <h2>MAKE BREAD</h2>
        </div>
        <div className="select-links">
          <div className="bread">
            <img src="/bread.jpg" alt="sourdough bread" />
            <Link to="/bread">Schedule for bread</Link>
          </div>
          <div className="starter">
            <img src="/starter.png" alt="sourdough starter" />
            <Link to="/starter">Schedule for starter</Link>
          </div>
          <div className="recipe">
            <img src="/recipe.png" alt="writing out a recipe" />
            <Link to="/recipe">Our recipe</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
