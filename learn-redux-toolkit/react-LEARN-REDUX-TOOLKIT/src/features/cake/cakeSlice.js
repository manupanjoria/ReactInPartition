// const { action } = require('@remix-run/router')
// const createSlice = require('@reduxjs/toolkit').createSlice

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numOfCakes: 10
}

//below
// createSlice automatically generate action creator with the name ordered and restocked
// apart from it will also return main reducer function which we will provide in our app store

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) =>{ //ordered key have two parameter state and action
            state.numOfCakes--
        },
        restocked: (state, action)=>{
            state.numOfCakes += action.payload
        },
    },
})

// module.exports = cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions

// above 24 and 25 line reduce the boiler plate code...
//action types constant and action creator, switch statement in reducer,
// and handling immutable updates in reducer


export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
