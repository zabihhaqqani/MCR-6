import React from 'react'
import { useDataContext } from '../components/context/context'
import { cuisineData } from '../database/cuisineData';
import Buttons from '../components/button/buttons';
import CuisineSection from '../components/cuisines/cuisinesSection';

function LandingPage() {
  const { dataState } = useDataContext()
  
  return (
    <div>
      <h2>Food Ordering App</h2>

      <h3>Select Your Cuisine: </h3>
      <ul className="btn-container">
        {cuisineData?.map(data => {
          return <Buttons key={data?.id} item={data} />
        })}
      </ul>
      <CuisineSection />
    </div>
  );
}

export default LandingPage