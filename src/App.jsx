import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './features/Dashboard/Dashboard'


function App() {
  return (
    <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/about' Component={AboutPage} />
            <Route path='/services' Component={ServicePage} />
            <Route path='/login' Component={LoginPage} />
            <Route path='/register' Component={RegisterPage} />
            <Route path='/dashboard/:id' Component={Dashboard} />
          </Routes>
        </Router>
    </>
      
  )
}

export default App
