import {createStore,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userLoginReducers} from './reducers/userReducers'
import {taskReducers} from './reducers/taskReducers'


const reducer = combineReducers({
    userLogin:userLoginReducers,
    taskReducers:taskReducers
})

const userInfoFromStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null

const initialState = {
    userLogin:{userInfo:userInfoFromStorage}
}

const store = createStore(reducer,initialState,composeWithDevTools())


export default store