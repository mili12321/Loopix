import React from "react";
import { BiErrorCircle } from "react-icons/bi";

export function Msg({msg}) {

    return (
        <div className="msg flex place-center">
        <BiErrorCircle className='icon'/> <span className='margin-left-5px'>{msg}</span>
        </div>
    )
}
