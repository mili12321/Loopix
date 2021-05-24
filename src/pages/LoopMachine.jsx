import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadPads, updateMultiplePads } from "../store/actions/padActions";
import { PadList } from "../cmps/PadList.jsx";
import { Audio } from "../cmps/Audio";
import { Pause } from "../cmps/Pause.jsx";
import { Play } from "../cmps/Play.jsx";
import { Msg } from "../cmps/Msg.jsx";
// import { Recorder } from "../cmps/Recorder.jsx";

export const LoopMachine = () => {

    const dispatch = useDispatch()
    const pads = useSelector(state => state.pad.pads); 

    const [duration, setDuration] = useState(null); //playing duration
    const [playedSeconds, setPlayedSeconds] = useState(0); //the time elapsed from playing
    const [isPlaying, setIsPlaying] = useState(false)  //play/pause audio
    const [activePads, setActivePads] = useState([])  //active pads playing
    const [newPadsIdsForPlay, setNewPadsIdsForPlay] = useState([]) //array of pads to the next loop cycle
    const [loopToRemove, setLoopToRemove] = useState(null) //loop to remove from the current playing loops
    const [msg, setMsg] = useState(null) //err msg

    // setup pads 
    useEffect(() => {
        dispatch(loadPads())
    }, [dispatch])

    
    // filter all pads to get only the active pads.
    useEffect(() => {
        function getActivePads() {
            const activePads = pads.filter(pad=>pad.isOn===true) 
            const LoopArray = activePads.map(pad=>pad.loop)
            setActivePads(LoopArray)
        }
        getActivePads()
    }, [pads])
    

    // no active pads?  ==>  stops playing
    useEffect(() => {
        if(activePads.length===0){
            setIsPlaying(false)
        }else if(activePads.length>0&&!isPlaying){
            setIsPlaying(false)
        }
    }, [activePads,isPlaying])


    const handleProgress = state => {
        //loop cycle ends
        // if(state.playedSeconds===duration){ 
        if(state.played===1){ 
            setIsPlaying(false)
            //update the pads that inside newPadsIdsForPlay, 
            //and seting a new ActivePads array before the next loop cycle 
            if(newPadsIdsForPlay.length>0){
                dispatch(updateMultiplePads(newPadsIdsForPlay))
            }
            setNewPadsIdsForPlay([])

            setIsPlaying(true)
        }

        //When a pad is turned off, it is removed from activePads array
        if(loopToRemove){
            const pad = pads.find(_pad=>_pad.loop===loopToRemove)
            if(!pad.isOn){
                setActivePads(activePads.filter(loop=>loop!==loopToRemove))
            }
            setLoopToRemove(null)
        }
        

        if(!isPlaying){
            setPlayedSeconds(state.playedSeconds)
        }
    }

    useEffect(() => {
    }, [isPlaying])    
    
    useEffect(() => {
        if(activePads.length===0&&newPadsIdsForPlay.length>0){
            //start immediately a new cycle 
            dispatch(updateMultiplePads(newPadsIdsForPlay))
            setIsPlaying(true)
            setNewPadsIdsForPlay([])

        }
    }, [activePads,dispatch,newPadsIdsForPlay]) 
    
    
    useEffect(() => {
    }, [newPadsIdsForPlay])

    const handleEnded = () => {
    }

    const handleDuration = (_duration) => {
        if(!duration){
            setDuration(_duration)
        }else if(_duration > duration){
            setDuration(_duration)
        }
    } 
    
    const onPlayAudio = () => {
        if(activePads.length>0){
            setIsPlaying(true)
        }else{
            setMsg('Select at least one pad to start')
            setTimeout(() => {
                setMsg(null)
            }, 1500);
        }
    }


    if(!pads) return <div>loading...</div>
    return (
        <div className="loop-machine-container">
            {isPlaying&&
            //background
                <div class="scene">
                    <div class="wrap">
                        <div class="wall wall-right"></div>
                        <div class="wall wall-left"></div>   
                        <div class="wall wall-top"></div>
                        <div class="wall wall-bottom"></div> 
                        <div class="wall wall-back"></div>    
                    </div>
                    <div class="wrap">
                        <div class="wall wall-right"></div>
                        <div class="wall wall-left"></div>   
                        <div class="wall wall-top"></div>
                        <div class="wall wall-bottom"></div>   
                        <div class="wall wall-back"></div>    
                    </div>
                </div>
            }


            <div className="controls flex justify-center">
                {isPlaying ? 
                    <Pause handleClick={() => setIsPlaying(false)} /> :
                    <Play activePads={activePads} handleClick={() => onPlayAudio()} />
                }
            </div>

            <div className="inspiration-text"> make your own music.</div>

            <PadList 
            pads={pads} 
            setNewPadsIdsForPlay={setNewPadsIdsForPlay}
            playedSeconds={playedSeconds}
            isPlaying={isPlaying}
            setLoopToRemove={setLoopToRemove}
            newPadsIdsForPlay={newPadsIdsForPlay}
            />

            <Audio 
            activePads={activePads}
            isPlaying={isPlaying}
            handleEnded={handleEnded}
            handleProgress={handleProgress}
            handleDuration={handleDuration}
            setIsPlaying={setIsPlaying}
            />
            
            {msg&&<Msg msg={msg}/>}

           
            {/* <Recorder activePads={activePads} isPlaying={isPlaying}/> */}

        </div>
    )
}