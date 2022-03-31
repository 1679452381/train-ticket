import {
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    ACTION_SET_CURRENT_SELECTOR_LEFT_CITY,
    ACTION_SET_CITY_DATA,
    ACTION_SET_IS_LOADING_CITY_DATA,
    ACTION_SET_IS_DATA_SELECTORVISIBLE,
    ACTION_SET_HIGH_SPEED,
    ACTION_SET_DEPART_DATE
} from './contant'

// 设置出发点
export const setFrom = (from) => ({ type: ACTION_SET_FROM, payload: from })
// 设置目的地
export const setTo = (to) => ({ type: ACTION_SET_TO, payload: to })

export const setIsLoadingCityData = (isLoadingCityData) => ({ type: ACTION_SET_IS_LOADING_CITY_DATA, payload: isLoadingCityData })

export const setCityData = (cityData) => ({ type: ACTION_SET_CITY_DATA, payload: cityData })

export const toggleHighSpeed = () => {
    return (dispatch, getState) => {
        const { highSpeed } = getState()
        dispatch({
            type: ACTION_SET_HIGH_SPEED,
            payload: !highSpeed
        })
    }

}

export const showCitySelector = (currentSelectingLeftCity) => {
    return (dispatch) => {
        dispatch({
            type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
            payload: true
        })
        dispatch({
            type: ACTION_SET_CURRENT_SELECTOR_LEFT_CITY,
            payload: currentSelectingLeftCity
        })
    }
}

export const hideCitySelector = () => ({
    type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    payload: false
})

export const setSelectedCity = (city) => {
    return (dispatch, getState) => {
        const { currentSelectorLeftCity } = getState()
        if (currentSelectorLeftCity) {
            dispatch(setFrom(city))
        } else {
            dispatch(setTo(city))
        }
    }
}

export const showDateSelector = () => ({
    type: ACTION_SET_IS_DATA_SELECTORVISIBLE,
    payload: true
})
export const hideDateSelector = () => ({
    type: ACTION_SET_IS_DATA_SELECTORVISIBLE,
    payload: false
})

export const exchangeFromTo = () => {
    return (dispatch, getState) => {
        const { from, to } = getState()
        dispatch(setFrom(to))
        dispatch(setTo(from))
    }
}

export const setDepartDate = (date) => ({
    type: ACTION_SET_DEPART_DATE,
    payload: date
})

export const fetchCityData = () => {
    return (dispatch, getState) => {
        const { isLoadingCityData } = getState()
        if (isLoadingCityData) {
            return
        }
        dispatch(setIsLoadingCityData(true))

        const data = JSON.parse(localStorage.getItem('_CITY_DATA_')) || ''
        if (Date.now() < data.serve_time) {
            dispatch(setCityData(data.cityData))
            return
        }
        fetch('/rest/cities?_' + Date.now())
            .then(res => res.json())
            .then(cityData => {
                dispatch(setCityData(cityData))
                localStorage.setItem('_CITY_DATA_', JSON.stringify({
                    serve_time: Date.now() + 60 * 10000,
                    cityData,
                }))
                dispatch(setIsLoadingCityData(false))
            })
            .catch(() => {
                dispatch(setIsLoadingCityData(false))
            })
    }
}




