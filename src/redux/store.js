import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'

import reducers from './reducers'
import thunk from 'redux-thunk'


export default createStore(combineReducers(reducers),
    {
        from: "郑州",
        to: '北京',
        isCitySelectorVisible: false,
        currentSelectorLeftCity: false,
        cityData: null,
        isLoadingCityData: false,
        isDataSelectorVisible: false,
        departDate: null,
        highSpeed: false,
    },
    applyMiddleware(thunk))