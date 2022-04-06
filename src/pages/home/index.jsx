import React, { useCallback } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity,
  hideDateSelector,
  showDateSelector,
  setSelectDepartDate,
} from "../../redux/actions";

import Header from "../../components/Header";
import CitySelector from "../../components/CitySelector";
import DateSelector from "../../components/DateSelector";
import Journey from "./Journey";
import DepartDate from "./DepartDate";
import Submit from "./Submit";

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
    isDataSelectorVisible,
    departDate,
    showDateSelector,
    hideDateSelector,
    setSelectDepartDate,
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

  const doShowDateSelector = useCallback(() => {
    showDateSelector();
  }, []);
  const doHideDateSelector = useCallback(() => {
    hideDateSelector();
  }, []);
  const doSetSelectDepartDate = useCallback((date) => {
    setSelectDepartDate(date);
    hideDateSelector();
  }, []);

  return (
    <Container>
      <Header title={"首页"} onBack={onBack} />
      <form>
        <Journey
          from={from}
          to={to}
          exchangeFromTo={doExchangeFromTo}
          showCitySelector={doShowCitySelector}
        />
        <CitySelector
          show={isCitySelectorVisible}
          cityData={cityData}
          isLoadingCityData={isLoadingCityData}
          onBack={doHideCitySelector}
          fetchCityData={doFetchCityData}
          toSelect={dosetSelectedCity}
        />

        <DepartDate time={departDate} showDateSelector={doShowDateSelector} />

        <DateSelector
          show={isDataSelectorVisible}
          onBack={doHideDateSelector}
          toSelect={doSetSelectDepartDate}
        />
        <Submit />
      </form>
    </Container>
  );
}
const Container = styled.div`
  box-sizing: border-box;
`;

export default connect((state) => state, {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity,
  showDateSelector,
  hideDateSelector,
  setSelectDepartDate,
})(Home);
