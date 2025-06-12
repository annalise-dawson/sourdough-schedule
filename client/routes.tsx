import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Bread from './components/Bread.tsx'
import Starter from './components/Starter.tsx'
import Recipe from './components/Recipe.tsx'
import Home from './components/Home.tsx'
import Timer from './components/Timer.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/bread" element={<Bread />} />
    <Route path="/starter" element={<Starter />} />
    <Route path="/recipe" element={<Recipe />} />
    <Route path="/timer" element={<Timer />} />
  </Route>,
)
