import React from 'react'
import Header from './V1/Header'
import Footer from './V1/Footer'
import Hero from './V1/Hero'
import Projects from './V1/Projects'
import Learnings from './V1/Learnings'
import Contact from "./V1/Contact"
import BottomSpinner from "./V1/Fixed/BottomSpinner"

export default function V1() {
  return (
    <div className='bg-secondary text-primary min-h-[800vh] px-[.5rem] md:px-[3rem]'>
      <BottomSpinner /> 
      <Header/>
      <Hero/>
      <Projects/>
      <Learnings/>
      <Contact/>
      <Footer/>
    </div>
  )
}
