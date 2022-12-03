const redux = require('redux')
const createStore = redux.createStore


const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux actiion'
    }    
}

// (previousState, action) => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
switch(action.type){
    case BUY_CAKE: return{
        ...state, // asking reducer to make a copy of state object and in next line change only numOfCakes property
        numOfCakes: state.numOfCakes - 1
    }
    default: return state 
}
}

const store = createStore(reducer)

console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(()=> console.log("updated state", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()

// How code flow --
// 1) first create store like line number 1 and 2
// 2) at line 30 createStore method accept from redux library accept parameter reducer funtion how Transition happen
// 3) line 32 console karai initial state 
// 4) line 33, after it setup the listener for store (anytime store update we log the state to console)
// 5) line 34 when we dispath the action we see reducer type and match this type with switch cases
// 6) matches the first state case and matched and decrement the number of cake by 1 and return new state
// so now store state uppdated the listener is called which logs to console the updated state number
// similary for next dispatches of line  35 and 36
// At end unsubscribe to the changes 