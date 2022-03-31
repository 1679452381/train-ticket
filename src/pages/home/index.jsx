import React, { useCallback } from "react";
import { connect } from "react-redux";
import { exchangeFromTo, showCitySelector } from "../../redux/actions";

import Header from "../../components/Header";
import Journey from "./Journey";

function Home(props) {
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const { from, to, exchangeFromTo, showCitySelector } = props;

  const doExchangeFromTo = useCallback(() => {
    exchangeFromTo();
  }, []);
  const doShowCitySelector = useCallback((m) => {
    showCitySelector(m);
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
    </div>
  );
}

export default connect((state) => state, { exchangeFromTo, showCitySelector })(
  Home
);
