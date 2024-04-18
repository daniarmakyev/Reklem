import React from 'react'
import GoToDire from './GoToDire/GoToDire'
import MiniInfo from './MiniInfo/MiniInfo'
import Header from '../../components/Header/Header'
import AboutBlock from './AboutBlock/AboutBlock'



const MainPage = () => {
  return (
    <div>
    <GoToDire/>
    <AboutBlock/>
    <MiniInfo/>
    </div>
  )
}

export default MainPage
