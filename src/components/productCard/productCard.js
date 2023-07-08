import React from 'react'
import MenuCard from './menuCard'

const ProductCard = ({ item }) => {
    const { id, name, menu } = item

  return (
      <div >
          <h3>Cuisines By {name}</h3>
          <div className='menu-card-container'>
          {menu?.map((data,index) => {
              return <MenuCard key={index} item={data} restaurentName={name} />
          })}
          </div>
    </div>
  )
}

export default ProductCard