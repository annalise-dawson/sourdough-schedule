import { Outlet } from 'react-router-dom'
import Nav from './Nav.tsx'
import Footer from './Footer.tsx'

function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
