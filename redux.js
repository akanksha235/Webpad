import { combineReducers } from 'redux'

function messageOne(state = {message1: "Initial Message 1"}, action) {
  switch(action.type) {
    case 'UPDATE_MSG_1':
      state.message1 = action.newMessage
      return state
    default:
      return state
  }
}
function messageTwo(state = {message2: "Initial Message 2"}, action) {
  switch(action.type) {
    case 'UPDATE_MSG_2':
      state.message2 = action.newMessage
      return state
    default:
      return state
  }
}

const displayMessages = Redux.combineReducers({
  messageOne,
  messageTwo
})

//define actions creators
function updateMsg1() {
  const UPDATE_MSG_1 = 'UPDATE_MSG_1';
  return {
    type: UPDATE_MSG_1,
    newMessage: "Howdy! I'm a new property for local state 1!"
  }
}

function updateMsg2() {
  const UPDATE_MSG_2 = 'UPDATE_MSG_2';
  return {
    type: UPDATE_MSG_2,
    newMessage: "Howdy! I'm a new property for local state 2!"
  }
}

//intialize store
let store = Redux.createStore(displayMessages)
//render value of state to DOM
let valueTarget1 = document.getElementById('value1')
let valueTarget2 = document.getElementById('value2')
function render() {
  console.log(store.getState())
  valueTarget1.innerHTML = store.getState().messageOne.message1
  valueTarget2.innerHTML = store.getState().messageTwo.message2
}
render()
//subscribe to render
store.subscribe(render)

setTimeout( () => {
  store.dispatch(updateMsg1())
  store.dispatch(updateMsg2())
}, 2000)
