import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar-index'

function App() {

  return (
    <div className = "App">
    
      < NavBar />
      
      <div className = 'container-class'>
        <Outlet/>
      </div>

    </div>
  )
}

export default App
