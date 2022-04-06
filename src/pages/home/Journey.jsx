import styled from "@emotion/styled";
import React from "react";

import { ReactComponent as Switch } from "../../assets/svg/switch.svg";

export default function Journey(props) {
  const { from, to, exchangeFromTo, showCitySelector } = props;
  return (
    <Container>
      <JourneyStation onClick={() => showCitySelector(true)}>
        <JourneyInput value={from} readOnly />
      </JourneyStation>
      <Switch width={"2rem"} height={"2rem"} onClick={exchangeFromTo} />
      <JourneyStation onClick={() => showCitySelector(false)}>
        <JourneyInput value={to} readOnly />
      </JourneyStation>
    </Container>
  );
}

const Container = styled.div`
  padding: 0.5rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const JourneyStation = styled.div``;
const JourneyInput = styled.input`
  width: 9rem;
  height: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 1px solid gray;
  outline: 0;
  text-align: center;
`;
