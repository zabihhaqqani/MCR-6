import React, { useState } from "react";
import "./menuCard.css";
import { useDataContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const MenuCard = ({ item, restaurentName }) => {
  const { menuCardHandler } = useDataContext();
  const navigate = useNavigate();
  const { name, imgSrc, price, qty } = item;

  return (
    <div
      onClick={() => {
        menuCardHandler(restaurentName);
        navigate("/page");
      }}
      className="menu-card-container"
    >
      <div style={{ padding: "0rem" }} className="bat-card bat-border-1">
        <img id="images" src={imgSrc} alt="batman" />
        <div className="bat-flex bat-flx-dir-col bat-justify-between bat-m-r-8px">
          <div className="fs-1r bold-600 bat-primary-clr">{name}</div>
          <div>
            <span className="bat-fs-14px bold-500 bat-m-r-8px">
              ₹{price} for {qty}
            </span>{" "}
          </div>
            <span className="bat-fs-14px bold-500 bat-m-r-8px">
              {restaurentName}
            </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
