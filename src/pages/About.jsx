import React, { useEffect } from 'react'
import AboutHero from '../components/about/HeroAbout';
import MyStory from '../components/about/Story';
import Philosophy from '../components/about/Philisophy';
import Achievements from '../components/about/Stats';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <AboutHero/>
      <MyStory/>
      <Philosophy/>
        <Achievements/>
    </div>
  )
}

export default About
