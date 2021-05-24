const initialState = {
    pads: []
}

export function padReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PADS':
            return {
                ...state,
                pads: action.pads
            }
        case 'UPDATE_PAD':
            return {
                ...state,
                pads: state.pads.map(pad => pad._id === action.pad._id?action.pad:pad )
            } 
        default:
            return state
    }
}