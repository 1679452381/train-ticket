import React, { useCallback } from "react";
import { connect } from "react-redux";
import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity,
} from "../../redux/actions";

import Header from "../../components/Header";
import CitySelector from "../../components/CitySelector";
import Journey from "./Journey";
import DepartDate from "./departDate";
import Submit from "./submit";

function Home(props) {
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const {
    from,
    to,
    cityData,
    isCitySelectorVisible,
    isLoadingCityData,
    exchangeFromTo,
    showCitySelector,
    hideCitySelector,
    fetchCityData,
    setSelectedCity,
  } = props;

  const doExchangeFromTo = useCallback(() => {
    exchangeFromTo();
  }, []);
  const doShowCitySelector = useCallback((m) => {
    showCitySelector(m);
  }, []);
  const doHideCitySelector = useCallback(() => {
    hideCitySelector();
  }, []);
  const doFetchCityData = useCallback(() => {
    fetchCityData();
  }, []);

  const dosetSelectedCity = useCallback((m) => {
    setSelectedCity(m);
  }, []);
  return (
    <div>
      <Header title={"首页"} onBack={onBack} />
      <form>
        <Journey
          from={from}
          to={to}
          exchangeFromTo={doExchangeFromTo}
          showCitySelector={doShowCitySelector}
        />
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoadingCityData={isLoadingCityData}
        onBack={doHideCitySelector}
        fetchCityData={doFetchCityData}
        toSelect={dosetSelectedCity}
      />
    </div>
  );
}

export default connect((state) => state, {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity,
})(Home);
