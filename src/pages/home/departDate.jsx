import React, { useMemo } from "react";
import dayjs from "dayjs";

import { h0 } from "../../utils/index";
import styled from "@emotion/styled";

export default function DepartDate(props) {
  const { time, showDateSelector } = props;
  const date = h0(time);

  const dateString = useMemo(() => {
    return dayjs(date).format("YYYY-MM-DD");
  }, [date]);
  const isToday = date.getDay() === h0().getDay();

  const weekString =
    "周" +
    ["日", "一", "二", "三", "四", "五", "六"][date.getDay()] +
    (isToday ? "(今天)" : "");
  return (
    <Container onClick={() => showDateSelector()}>
      {dateString}
      <span> {weekString}</span>
    </Container>
  );
}

const Container = styled.div`
  height: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border-bottom: 0.1rem solid whitesmoke;
  margin: 0 0.5rem;
  padding: 0.5rem;
  font-size: 1.1rem;
  span {
    margin-left: 0.5rem;
    font-size: 0.6rem;
    color: gray;
  }
`;
