import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}


// const reducer = (state, action) => {
//     switch (action.type) {
  
//       case 'increment':
//         return {...state,firstCounter:state.firstCounter + action.value};
//       case 'decrement':
//         return {...state,firstCounter:state.firstCounter - action.value};
//         case 'increment2':
//           return {...state,secondCounter:state.secondCounter + action.value};
//         case 'decrement2':
//           return {...state,secondCounter:state.secondCounter - action.value};
//       case 'reset':
//         return initialState;
//       default:
//         return state
//     }
  
//   }
const reducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_SUCESS':
            console.log(action);
            return {...state,loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {...state,
                loading: false,
                post: {},
                error: 'Somthing went wrong!!'
            }

        default:
            return state;
    }

};

export default function DataFeachingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
                dispatch({ type: 'FETCH_SUCESS', payload: response.data })
            }).catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);
    return (
        <div>
        {state.loading ? 'loading': state.post.title}
        {state.error ?  state.error :null}
        </div>
    )
}
