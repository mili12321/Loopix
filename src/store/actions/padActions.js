import { padService } from '../../services/padService'
import { loading, doneLoading } from './systemActions';


//-----------------PAD CRUD------------------------


export function loadPads() {
  
    return async dispatch => {
        try{
            dispatch(loading());
            const pads = await padService.query();
            dispatch({ type: 'SET_PADS', pads })
        }catch(err){
            console.log('err in loading pads', err);
        }finally{
            dispatch(doneLoading());
        }
    }
}

export function updatePad(pad) {

  return async dispatch => {
      try{
          await padService.save(pad)
          dispatch({ type: 'UPDATE_PAD', pad})
      }catch(err){
          console.log('err in updating pad', err); 
      }
  }
}

export function updateMultiplePads(padsIds) {

  return async dispatch => {
      try{
          const pads = await padService.saveMultiplePads(padsIds)
          dispatch({ type: 'SET_PADS', pads })
      }catch(err){
          console.log('err in updating pads', err); 
      }
  }
}



// export function addRecording(newSession) {
//     return async dispatch => {
//         try{
//           const session = await recordeService.add(newSession)
//             dispatch({ type: 'ADD_SESSION', session})
//             return session
//         }catch(err){
//             console.log('err in adding new recorded session', err); 
//         }
//     }
// }



