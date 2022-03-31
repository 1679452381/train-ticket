import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'

import reducers from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'



export default createStore(combineReducers(reducers),
    {
        from: "郑州",
        to: '北京',
        currentSelectorLeftCity: false,
        isCitySelectorVisible: false,
        cityData: null,
        isLoadingCityData: false,
        isDataSelectorVisible: false,
        departDate: null,
        highSpeed: false,
    },
    composeWithDevTools(applyMiddleware(thunk)))