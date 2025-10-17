import React, { useEffect } from 'react'
import Hero from '../components/home/Hero'
import PillarsSection from '../components/home/Pillars'
import ServicesSection from '../components/home/Services'
import CaseStudies from '../components/home/Case-studies'


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }
    , []);
  return (
    <div>
      <Hero />
      <PillarsSection/>
      <ServicesSection/>
      <CaseStudies/>
    </div>
  )
}

export default Home
