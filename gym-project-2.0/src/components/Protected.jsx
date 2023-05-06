import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from 'recoil'
import {loginStat} from './Atom'

function Protected({Component}) {

  const isloggedin = useRecoilValue(loginStat)
    const navigate = useNavigate()

    useEffect(()=>{
        // let login = localStorage.getItem('loginStat')
        if(isloggedin===false ){
            navigate('/joining')
        }
    })
    
  return (
    <div>
      <Component/>
    </div>
  )
}

export default Protected
