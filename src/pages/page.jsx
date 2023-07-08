import React from "react";
import { useDataContext } from "../components/context/context";
import ReviewModal from "../components/review/reviewModal";

function Page() {
  const { restaurant, data, reviewBtnHandler, isAdd, setIsAdd } = useDataContext();

  const filteredData = data?.filter((item) => item.name === restaurant);
  return (
    <div>
      <h2>{restaurant}</h2>

      {filteredData?.map((item) => {
        const {
          name,
          address,
          phone,
          ratings,
          averageRating,
          description,
          id,
          menu,
        } = item;
        return (
          <div key={id}>

            <div>
              {menu?.map((item, index) => (
                <div key={index}>
                  <p>{item.name}, </p>
                </div>
              ))}
              <button onClick={() => {
                // reviewBtnHandler()
                setIsAdd(!isAdd)
              }} className="cuisine-btn">Add Review</button>
            </div>

            <p>{address}</p>

            <p>Average Rating: {averageRating}</p>
            <hr />
            <h2>Reviews</h2>
            {ratings?.map((item, index) => (
              <div key={index}>
                <div>
                  <img src={item?.pp} alt="" />
                  <p>{item.revName}</p>
                  <p>{item.rating}</p>
                </div>
                <p>{item?.comment}</p>
              </div>
            ))}
          </div>
        );
      })}

      {isAdd && <ReviewModal name={restaurant} />} 
    </div>
  );
}

export default Page;
