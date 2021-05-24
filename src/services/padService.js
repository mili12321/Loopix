import { storageService } from "./storageService"
import { pads } from "../data/pads";


const KEY = 'PADS';
let gPads;

export const padService = {
    query,
    getById,
    save,
    saveMultiplePads
}


async function query() {
    gPads = await storageService.loadFromStorage(KEY)
    if(!gPads){
        gPads = [...pads]
        storageService.saveToStorage(KEY, gPads)
    }
    return gPads
}



function getById(padId) {
    const pad = pads.find(pad => pad._id === padId)
    return Promise.resolve(pad)
}


function saveMultiplePads(padsIds) {
    gPads = gPads.map(_pad=>
        padsIds.includes(_pad._id)? 
        {..._pad, isOn:!_pad.isOn}
        : _pad
    )
    storageService.saveToStorage(KEY, gPads)
    return gPads
}


function save(pad) {
    gPads = gPads.map(_pad=>
        _pad._id === pad._id? pad : _pad
    )
    storageService.saveToStorage(KEY, gPads)
}
