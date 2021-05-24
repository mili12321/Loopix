import React from "react";
import { useDispatch } from "react-redux";
import { updatePad } from "../store/actions/padActions";
import { BsToggleOff,BsToggleOn } from 'react-icons/bs';
import { SiDiscogs } from 'react-icons/si';
import { IoIosCloudyNight } from 'react-icons/io';
import { GiGuitar } from 'react-icons/gi';
import { FaGuitar ,FaRegHandPeace } from 'react-icons/fa';
import { GiDrum } from 'react-icons/gi';
import { GiIsland } from 'react-icons/gi';
import { IoGameControllerOutline } from 'react-icons/io5';
import { RiAliensLine } from 'react-icons/ri';

import { Spectrogaph } from './Spectrogaph';


export function PadPreview({pad,idx,setNewPadsIdsForPlay, playedSeconds,isPlaying, setLoopToRemove,newPadsIdsForPlay}) {

    const dispatch = useDispatch()

    const onUpdatePad = (pad) => {
        const newPad = {
            ...pad,
            isOn:!pad.isOn
        }
        if(newPadsIdsForPlay.includes(pad._id)){
            setNewPadsIdsForPlay(prevArray => prevArray.filter(id => id !== pad._id));
        }else{
            if(pad.isOn){
                //remove pad's loop form activePads array
                dispatch(updatePad(newPad))
                setLoopToRemove(pad.loop)
            }else{
                if(playedSeconds===0&&!isPlaying){
                    //add pad's loop to activePads array if its the first loop cycle
                    dispatch(updatePad(newPad))
                }else{
                    //add pad's loop to NewPadsIdsForPlay to be updated for the next loop cycle
                    setNewPadsIdsForPlay(loopsArray => [...loopsArray, pad._id]);
                }
            }
        }
    }


    const getPadIcon = (padId) =>{
        switch (padId) {
            case 101:
                return <SiDiscogs/>; 
            case 102:
                return <IoIosCloudyNight/>
            case 103:
                return <GiGuitar/>
            case 104:
                return <FaGuitar/>
            case 105:
                return <GiDrum/>
            case 106:
                return <GiIsland/>   
            case 107:
                return <IoGameControllerOutline/>
            case 108:
                return <FaRegHandPeace/>
            case 109:
                return <RiAliensLine/>
        
            default:
                break;
        }
    }

    return (
        <div className={`pad-preview btn glassmorphism ${pad.isOn?'active':''} ${newPadsIdsForPlay.includes(pad._id)?'waiting-to-join':''}`} key={pad._id} onClick={()=>onUpdatePad(pad)}>
            <div className="pad-header flex space-between">
                <div className="icon">{getPadIcon(pad._id)}</div>
                <div className="pad-state-btn">
                    {pad.isOn?
                    <BsToggleOn className='icon on'/>
                    :
                    <BsToggleOff className='icon off'/>
                    }
                </div>
            </div>
            <div className="pad-name">{pad.name}</div>
            <Spectrogaph padIsOn={pad.isOn} isPlaying={isPlaying} />
        </div>
    )
}
