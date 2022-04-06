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


const reducers = {
    from(prestate = '郑州', action) {
        const { type, payload } = action
        switch (type) {
            case ACTION_SET_FROM:
                return payload
            default:
        }
        return prestate
    },

    to(prestate = '北京', action) {
        const { type, payload } = action
        switch (type) {
            case ACTION_SET_TO:
                return payload
            default:
        }
        return prestate
    },

    isCitySelectorVisible(prestate = false, action) {
        const { type, payload } = action
        switch (type) {
            case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
                return payload
            default:
        }
        return prestate
    },

    currentSelectorLeftCity(prestate = false, action) {
        const { type, payload } = action
        switch (type) {
            case ACTION_SET_CURRENT_SELECTOR_LEFT_CITY:
                return payload
            default:
        }
        return prestate
    },

    cityData(prestate = null, action) {
        const { type, payload } = action
        switch (type) {
            case ACTION_SET_CITY_DATA:
                return payload
            default:
        }
        return prestate
    },

    isLoadingCityData(prestate = false, action) {
        const { type, payload } = action
        switch (type) {
            case ACTION_SET_IS_LOADING_CITY_DATA:
                return payload
            default:
        }
        return prestate
    },

    isDataSelectorVisible(prestate = false, action) {
        const { type, payload } = action
        switch (type) {
            case ACTION_SET_IS_DATA_SELECTORVISIBLE:
                return payload
            default:
        }
        return prestate
    },

    highSpeed(prestate = false, action) {
        const { type, payload } = action
        switch (type) {
            case ACTION_SET_HIGH_SPEED:
                return payload
            default:
        }
        return prestate
    },
    departDate(prestate = Date.now(), action) {
        const { type, payload } = action
        switch (type) {
            case ACTION_SET_DEPART_DATE:
                return payload
            default:
        }
        return prestate
    },

}

export default reducers