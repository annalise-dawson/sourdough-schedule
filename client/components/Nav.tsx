import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <header>
        <div className="title">
          <h1>SOURDOUGH SCHEDULER</h1>
        </div>
        <div className="logo">
          <img src="/logo.png" alt="person holding 3 breads" />
        </div>
        <div className="nav">
          <div className="home-nav">
            <Link to="/">Home</Link>
          </div>
          <div className="bread-nav">
            <Link to="/bread">Bread</Link>
          </div>
          <div className="starter-nav">
            <Link to="/starter">Starter</Link>
          </div>
        </div>
      </header>
    </>
  )
}
export default Nav
