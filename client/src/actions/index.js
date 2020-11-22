import axios from 'axios';
import { FETCH_USER } from "./types";

// Thunk middleware
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload: res.data});
};

// React-Redux rule
// Return pure Object（Action)

// export const fetchUser = () => {

//     return {
//         type: FETCH_USER, 
//         payload: res.data
//     }
// }


// const incrementIfOdd = () => (dispatch) => dispatch({type: FETCH_USER, payload: res.data});






// function test () {
//     return function async(dispatch) {
//         return value
//     }
// }


// const test = () =>  {
//   return const dispatch = ()=>{
//       return 
//   }
// }

