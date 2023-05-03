import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import AboutUs from './pages/about-us/AboutUs'
import Programs from './pages/programs/Programs'
import Training from './pages/training/Training'
import Pricing from './pages/pricing/Pricing'
import JoinUs from './pages/join-us/JoinUs'
import LogIn from './pages/logIn/LogIn'
import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar'


function App() {

  return (
    <div>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/program' element={<Programs/>}/>
        <Route path='/training' element={<Training/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/register' element={<JoinUs/>}/>
        <Route path='/login' element={<LogIn/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
