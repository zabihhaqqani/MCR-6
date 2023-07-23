import React from 'react'
import { useDataContext } from '../components/context/context'
import { cuisineData } from '../database/cuisineData';
import Buttons from '../components/button/buttons';
import CuisineSection from '../components/cuisines/cuisinesSection';

function LandingPage() {

  return (
    <div>
      <h3 className='title'>Food Ordering App</h3>

      <h4>Select Your Cuisine: </h4>
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