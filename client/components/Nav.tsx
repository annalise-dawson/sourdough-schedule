import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <header>
        <div className="navbar-title">
          <h1>SOURDOUGH SCHEDULER</h1>
        </div>
        <div className="navbar-logo">
          <img src="/logo.png" alt="person holding 3 breads" />
        </div>
        <div className="navbar-links">
          <div className="navbar-link">
            <Link to="/">Home</Link>
          </div>
          <div className="navbar-link">
            <Link to="/bread">Bread</Link>
          </div>
          <div className="navbar-link">
            <Link to="/starter">Starter</Link>
          </div>
          <div className="navbar-link">
            <Link to="/recipe">Recipe</Link>
          </div>
        </div>
      </header>
    </>
  )
}
export default Nav
