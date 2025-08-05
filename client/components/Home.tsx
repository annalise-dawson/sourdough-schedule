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
          <h2>HOW THE SOURDOUGH SCHEDULER CAN HELP</h2>
          <p className="home-intro">
            <p className="home-intro-box">
              <strong>SCHEDULING YOUR SOURDOUGH</strong>
              <br />A simple tool where you can select what time you&apos;ll
              start making your bread and it will show you at what time you
              should start each step.
            </p>

            <p className="home-intro-box">
              <strong>SCHEDULING YOUR STARTER</strong>
              <br />
              Much like the sourdough scheduler! Except this is broken down day
              by day.
            </p>

            <p className="home-intro-box">
              <strong>SOURDOUGH TIMER</strong>
              <br />
              The timer starts at step one, once you&apos;ve finished the step
              just hit the timer and you will get an alert when it&apos;s time
              to move onto the next step.
            </p>
          </p>
          <h2>MAKE BREAD</h2>
        </div>
        <div className="home-links">
          <Link to="/bread">
            <div className="home-link">
              <img src="/bread.jpg" alt="sourdough bread" />
              Schedule for bread
            </div>
          </Link>
          <Link to="/starter">
            <div className="home-link">
              <img src="/starter.png" alt="sourdough starter" />
              Schedule for starter
            </div>
          </Link>
          <Link to="/timer">
            <div className="home-link">
              <img src="/timer.png" alt="sourdough timer" />
              Timer
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
