import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './pages/home/Home'
import AboutUs from './pages/about-us/AboutUs'
import Programs from './pages/programs/Programs'
import Trainer from './pages/trainer/Trainer'
import Pricing from './pages/pricing/Pricing'
import JoinUs from './pages/join-us/JoinUs'
import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar'
import Protected from './components/Protected'
import { useRecoilState } from 'recoil'
import { authAtom } from './components/Atom'
import { useEffect, useRef } from 'react'


function App() {

  const [auth, setAuth] = useRecoilState(authAtom)
  const navigate = useNavigate()
  const isFirstRender = useRef(true)

  useEffect(()=>{
    if(isFirstRender.current){
      const authFromLocal = JSON.parse(localStorage.getItem('auth'))
      setAuth(authFromLocal)
    }
    else{
      localStorage.setItem('auth', JSON.stringify(auth))

    if(auth.isLoggedIn){
      navigate('/')
    }
    else{
      navigate('/joining')
    }
    }

    isFirstRender.current = false
  }, [auth])

  return (
    <div>
    <NavBar/>
      <Routes>
        {/* <Route path='/' element={<Protected Component={Home}/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/program' element={<Programs/>}/>
        <Route path='/trainer' element={<Trainer/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/joining' element={<JoinUs/>}/>
        <Route path='/*' element={<div style={{height:'55vh'}}><h1>404: Page Not Found</h1></div>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
