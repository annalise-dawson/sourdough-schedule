import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className="home-header">
        <div className="home-header-text">
          <h1>SCHEDULE YOUR BREAD</h1>
          <p>Don&apos;t let it burn!</p>
        </div>
      </div>
      <div className="home-section">
        <div className="home-subheading">
          <h2>MAKE BREAD</h2>
        </div>
        <div className="home-links">
          <div className="home-link">
            <img src="/bread.jpg" alt="sourdough bread" />
            <Link to="/bread">Schedule for bread</Link>
          </div>
          <div className="home-link">
            <img src="/starter.png" alt="sourdough starter" />
            <Link to="/starter">Schedule for starter</Link>
          </div>
          <div className="home-link">
            <img src="/recipe.png" alt="writing out a recipe" />
            <Link to="/recipe">Our recipe</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
