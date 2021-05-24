import React from "react";
import { PadPreview } from "./PadPreview";

export function PadList({pads,setLoopToRemove,setNewPadsIdsForPlay,isPlaying,playedSeconds,newPadsIdsForPlay}) {

    return (
        <div className="pad-list-container">
            <div className='inner-container'>
            {
                pads.map((pad,idx)=>
                    <PadPreview 
                    key={pad._id} 
                    pad={pad} 
                    idx={idx}
                    setNewPadsIdsForPlay={setNewPadsIdsForPlay}
                    playedSeconds={playedSeconds}
                    isPlaying={isPlaying}
                    setLoopToRemove={setLoopToRemove}
                    newPadsIdsForPlay={newPadsIdsForPlay}
                    />
                )
            }
            </div>
        </div>
    )
}
