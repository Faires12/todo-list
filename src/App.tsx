import {Routes, Route} from 'react-router-dom'
import { List } from './pages/List'
import { Home } from './pages/Home'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/list" element={<List/>}/>
    </Routes>
  )
}
