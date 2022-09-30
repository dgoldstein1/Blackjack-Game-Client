import { applyMiddleware, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk'

//Importing the combine reducers
import reducer from './reducers'
//Importing the baseUrl
import setting from './setting'

const { baseUrl } = setting


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
 ? window.__REDUX_DEVTOOLS_EXTENSION__()
 : x => x

//Pass the returned middleware to applyMiddleware and compose
const middleware = applyMiddleware(reduxThunk)

const enhancer = compose(middleware, devTools)

//Pass the created enhancer to createStore
const store = createStore(reducer, enhancer)


export default store
