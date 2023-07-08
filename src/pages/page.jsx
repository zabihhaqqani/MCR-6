import React from "react";
import { useDataContext } from "../components/context/context";
import ReviewModal from "../components/review/reviewModal";
import { useNavigate } from "react-router-dom";
import "./page.css"

function Page() {
  const { restaurant, data, reviewBtnHandler, isAdd, setIsAdd } = useDataContext();

  const filteredData = data?.filter((item) => item.name === restaurant);
  const navigate = useNavigate()
  return (
    <div className="page-container">
      <i onClick={() => navigate("/")} className="fas fa-arrow-left fa-lg"></i>
    <div>
      <h2>{restaurant}</h2>
        {/* {!filteredData  ? "":'Go Back to Home Page and select a cuisine'} */}
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

            <div className="menu-details-container">
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
            <div className="address">
              <p>{address}</p>


            <p>Average Rating: {averageRating}</p>
            </div>
            <hr />
            <div >
            <h2>Reviews</h2>
            {ratings?.map((item, index) => (
              <div key={index}>
                <div className="review">
                  <img src={item?.pp} alt="" />
                  <p>{item.revName}</p>
                  <div className="rating-i"><p> {item.rating}☆</p></div>
                </div>
                <p className="comment">{item?.comment}</p>
                <hr />

              </div>
            ))}
            </div>
          </div>
        );
      })}


      {isAdd && <ReviewModal name={restaurant} />} 
    </div>
    </div>
  );
}

export default Page;
