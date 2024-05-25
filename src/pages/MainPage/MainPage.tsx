import React from 'react'
import GoToDire from './GoToDire/GoToDire'
import MiniInfo from './MiniInfo/MiniInfo'
import Header from '../../components/Header/Header'
import AboutBlock from './AboutBlock/AboutBlock'
import QuestionsFooter from '../../components/QuestionsFooter/QuestionsFooter'



const MainPage = () => {
  return (
    <div>
    <GoToDire/>
    <AboutBlock/>
    <MiniInfo/>
    <QuestionsFooter/>
    </div>
  )
}

export default MainPage
