import React from "react";
import "./button.css"
import { useDataContext } from "../context/context";

function Buttons({item}) {

  const { cuisineBtnHandler } = useDataContext();
  return (
    <div>
      <button
        onClick={() => cuisineBtnHandler(item?.id)}
        className="cuisine-btn"
      >
        {item?.name}
      </button>
    </div>
  );
}

export default Buttons;
