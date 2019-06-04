import { applyMiddleware, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import socketset from 'socketset'

const is = x => x
const reducer = is

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
 ? window.__REDUX_DEVTOOLS_EXTENSION__()
 : is

//  Run the function that returns a redux middleware function
//  and pass it the socket.io server URL:
const socket = socketset('localhost:4000')//TODO: change later to the heroku url

//Pass the returned middleware to applyMiddleware and compose
const middleware = applyMiddleware(socket, reduxThunk)

const enhancer = compose(middleware, devTools)

//Pass the created enhancer to createStore
const store = createStore(reducer, enhancer)

// Dispatch a 'SOCKETSET_CONNECT' action
const action = {
  type: 'SOCKETSET_CONNECT'
}
store.dispatch(action)

export default store
