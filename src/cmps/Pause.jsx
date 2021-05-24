import React from "react";
import { FaPause } from "react-icons/fa";

export function Pause({handleClick}) {
  
  return (
    <button className="player-button flex place-center justify-center" onClick={() => handleClick()}>
     <FaPause/>
    </button>
  );
}
