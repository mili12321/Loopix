import React from "react";

export function Spectrogaph({padIsOn,isPlaying}) {

    return (
    <div class={`spectrograph ${padIsOn&&isPlaying?'active':''}`}>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
        <div class="spectrograph__bar"></div>
    </div>
    )
}
