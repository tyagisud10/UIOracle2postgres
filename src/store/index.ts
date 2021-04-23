import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { getReducers } from 'store/reducers'

const store = () => {
    return createStore(getReducers(), applyMiddleware(thunk))
}

export default store