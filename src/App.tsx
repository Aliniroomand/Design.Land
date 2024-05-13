import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
// components
import Navbar from './components/Navbar'
import Home from './components/Home'
import Balloon_Design from './components/Balloon_design/Balloon_Design'
import Fruit_Design from './components/Fruit_design/Fruit_Design'
import Flower_Design from './components/Flower_design/Flower_Design'
import Contact_comments from './components/Contact_Comments/Contact_comments'

function App() {

  return (
    <>
    <Routes>
      <Route path='/commentsAndContact' element={<Contact_comments/>}/>
      <Route path='/flower' element={<Flower_Design/>}/>
      <Route path='/fruit' element={<Fruit_Design/>}/>
      <Route path='/balloon' element={<Balloon_Design/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/*' element={<Navigate to="/"/>}/>
    </Routes>
      <Navbar/>
    </>
  )
}

export default App
