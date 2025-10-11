import React, { useEffect } from 'react'
import ProgramsHero from '../components/programs/Phero';
import ProgramsGrid from '../components/programs/ProgramsGrid';

const Programs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }
        , []);
  return (
    <div>
      <ProgramsHero/>
      <ProgramsGrid/>
    </div>
  )
}

export default Programs
