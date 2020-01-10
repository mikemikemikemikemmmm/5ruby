import { createStore } from 'redux'
function isLoading(state = false, action) {
  switch (action.type) {
  case 'TRUE_LOADING':
    return state 
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}