import { Outlet } from 'react-router-dom'
import './App.css'
// components
import Navbar from './components/Navbar'


function App() {

  return (
    <main className=' w-svw h-svh'>
      <Outlet/>
      <Navbar/>
    </main>
  )
}

export default App
