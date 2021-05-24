import React, { useState,useRef,useEffect } from "react";

export function Recorder({isPlaying,activePads}) {

    const [recordedUrl, setRecordedUrl] = useState([])

    const startBtnEl = useRef()
    const stopBtnEl = useRef()
    const videoElement = useRef()

    var chunks = [];
    // create web audio api context
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioCtx = new AudioContext();
    // //!----
    
    // let audio
    // fetch("loops/PAS3GROOVE1.03B.mp3")
    // .then(data=>data.arrayBuffer())
    // .then(arrayBuffer=>audioCtx.decodeAudioData(arrayBuffer))
    // .then(decodedAudio => {
    //     audio=decodedAudio
    // });

    // function playback() {
    //     const playSound = audioCtx.createBufferSource()
    //     playSound.buffer = audio
    //     playSound.connect(audioCtx.destination)
    //     playSound.start(audioCtx.currentTime)
    // }


    // let audioArray = []
    // let audioDecodedArray = []

    // ---------------------------------------------------------------
   
    const [audioCtxArray, setaudioCtxArray] = useState([])
    const [audioArray, setaudioArray] = useState([])
    const [audioDecodedArray, setaudioDecodedArray] = useState([])
    
    // fetchMultippleFiles && create multiple AudioContext obj
    useEffect(() => {
        if(audioCtxArray.length===0&&audioArray.length===0&&audioDecodedArray.length===0){
            for (let i = 0; i < activePads.length; i++) {
                setaudioCtxArray(prev=>[...prev, new AudioContext()])
            }
            if(audioCtxArray.length===activePads.length){
                activePads.forEach((loop,idx) => {
                    fetch(loop)
                    .then(data=>data.arrayBuffer())
                    .then(arrayBuffer=>audioCtxArray[idx].decodeAudioData(arrayBuffer))
                    .then(decodedAudio => {
                        setaudioArray(prev=>[...prev,decodedAudio])
                    });
                })
            }
        }
    }, [activePads])
    
    //create array of audioCtx.createBufferSource() objects for palying
    useEffect(() => {
        if(audioArray.length>0){
            audioArray.forEach((audio,idx) => {
                setaudioDecodedArray(
                    prev=>[
                        ...prev,
                        {
                            audio:audio,
                            playSound:audioCtxArray[idx].createBufferSource()
                        }
                    ])
            });
        }
    }, [audioArray])
    
    //connecting playSound objects from audioDecodedArray to audio and audioCtx.destination when btn clicked
    function palyMultippleSounds() {
        audioDecodedArray.forEach((element,idx)=> {
            element.playSound.buffer = element.audio
            element.playSound.connect(audioCtxArray[idx].destination)
            element.playSound.start(audioCtxArray[idx].currentTime)
        });
    }


    // //!----
    var osc = audioCtx.createOscillator();
    var dest = audioCtx.createMediaStreamDestination();
    var mediaRecorder = new MediaRecorder(dest.stream);
    osc.connect(dest);


    useEffect(() => {
        if(stopBtnEl&&stopBtnEl.current){
            stopBtnEl.current.disabled  = true
        }
    }, [])


    mediaRecorder.ondataavailable = evt => {
        console.log('evt.data',evt.data);
        chunks.push(evt.data)
    }

    mediaRecorder.onstop = evt => {
        //data available after MediaRecorder.stop() called.
        let blob = new Blob(chunks, { type : 'audio/ogg; codecs=opus' });
        setRecordedUrl( URL.createObjectURL(blob) );
    }


    const onStartRecording = (e) => {
        e.target.disabled  = true
        if(stopBtnEl&&stopBtnEl.current){
            stopBtnEl.current.disabled  = false
        }
        mediaRecorder.start(1000); // where 1000 is the interval
        osc.start(0);//recorder started..
    }

   const onStopRecording = (e) => {
        e.target.disabled  = true
        if(startBtnEl&&startBtnEl.current){
            startBtnEl.current.disabled  = false
        }
        mediaRecorder.stop();
        osc.stop(0);
        //recorder stopped, data available...
    }


    return (
        <div className='audio-recorder'>

            <button ref={startBtnEl} onClick={(e)=>onStartRecording(e)} >
            start Recording
            </button>

            <button ref={stopBtnEl}  onClick={(e)=>onStopRecording(e)}>
            stop Recording
            </button>

            <audio ref={videoElement} src={recordedUrl} controls></audio>

            <button onClick={palyMultippleSounds}>paly Multipple Sounds</button>

        </div>
    )
}
