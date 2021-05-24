import React from "react";
import ReactPlayer from 'react-player'

export function Audio({
    activePads,
    isPlaying,
    handleEnded,
    handleProgress,
    handleDuration
}) {

    return (
        <>
        {
            activePads.map(loop=>
                <div className='player-wrapper' key={loop} >
                    <ReactPlayer
                    className='react-player fixed-bottom'
                    url={loop}
                    height='0'
                    width='0'
                    playing={isPlaying}
                    controls = {false}
                    onEnded={handleEnded}
                    onProgress={handleProgress}
                    onDuration={handleDuration}
                    />
                </div>
            )
        }
        </>
    )
}
