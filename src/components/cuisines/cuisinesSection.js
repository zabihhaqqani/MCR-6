import React, { useEffect } from 'react'
import { useDataContext } from '../context/context'
import ProductCard from '../productCard/productCard'

const CuisineSection = () => {

    const { data, setData } = useDataContext()

    
    const filteredData = data?.filter(item => item)
    useEffect(() => { setData([]) }, [])
    return (
        <div >
            {filteredData?.map(data => {
                return <ProductCard key={data?.id} item={data} />
            })
            }
        </div>
    )
}

export default CuisineSection