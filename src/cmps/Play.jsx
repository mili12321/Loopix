import React from "react";
import { FaPlay } from "react-icons/fa";

export function Play({activePads,handleClick}) {

    return (
      <button className={`player-button flex place-center justify-center ${activePads.length>0?'active':''}`} onClick={() => handleClick()}>
        <FaPlay/>
      </button>
    );
  }
  