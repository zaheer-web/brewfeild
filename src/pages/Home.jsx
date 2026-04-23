import React from 'react'
import Hero from '../Home/Hero'
import Welcome from '../Home/Welcome'
import AboutCards from '../Home/AboutCards'
import GrowthSection from '../Home/GrowthSection'
import Testimonials from '../Home/Testimonials'
import FranchiseCTA from '../Home/FranchiseCTA'

function Home() {
  return (
    <>
    <Hero/>
    <Welcome/>
    <AboutCards/>
    <GrowthSection/>
    <Testimonials/>
    <FranchiseCTA/>
    </>
  )
}

export default Home