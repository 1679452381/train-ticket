import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState, memo, useCallback } from "react";

import Header from "../Header";
import { getMonth, getWeeks } from "../../utils/date";

const Month = memo((props) => {
  const { toSelect, startTimeInMonth } = props;
  const startDay = new Date(startTimeInMonth);

  const weeks = getWeeks(startTimeInMonth);
  return (
    <>
      <MonthTable>
        <thead>
          <tr>
            <td colSpan="7">
              <h5>
                {startDay.getFullYear()}年{startDay.getMonth()}月
              </h5>
            </td>
          </tr>
        </thead>
        <tbody>
          <MonthWeekTr>
            <th>周一</th>
            <th>周二</th>
            <th>周三</th>
            <th>周四</th>
            <th>周五</th>
            <th>周六</th>
            <th>周日</th>
          </MonthWeekTr>
          {weeks?.map((week, idx) => (
            <Week week={week} key={idx} toSelect={toSelect} />
          ))}
        </tbody>
      </MonthTable>
    </>
  );
});
const MonthTable = styled.table`
  width: 100%;
  margin-bottom: 15px;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
  tr,
  th,
  td {
    padding: 0;
    margin: 0;
  }
  thead td {
    height: 39px;
    background-color: #fff;
  }
  thead h5 {
    font-size: 18px;
    line-height: 39px;
    text-align: center;
    font-weight: bold;
    padding: 0;
    margin: 0;
    border: 1px solid #cdcdcd;
  }
`;

const MonthWeekTr = styled.tr`
  font-size: 14px;
  height: 23px;
  color: #8c8c8c;
  background-color: #f3f3f3;
  text-align: center;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #cacaca;
  th {
    text-align: center;
  }
`;

const Week = (props) => {
  const { week, toSelect } = props;
  return (
    <WeekTr>
      {week?.map((day, idx) => (
        <Day day={day} key={idx} toSelect={toSelect} />
      ))}
    </WeekTr>
  );
};
const WeekTr = styled.tr`
  font-size: 14px;
  color: #8c8c8c;
  td {
    background: #fff;
    color: #000;
    border: 2.5px solid #e3e3e3;
    text-align: center;
    margin: 0 2px 2px 0;
    height: 40px;
    width: 40px;
    :hover {
      background-color: skyblue;
    }
  }
  td.null {
    background: #e3e3e3;
  }
  td.disabled {
    color: #a7a7a7;
    background: #f3f3f3;
    cursor: not-allowed;
  }
`;

const Day = (props) => {
  const { day, toSelect } = props;

  if (!day) return <td className="null"></td>;

  const now = new Date();
  let currentTime = new Date(day);

  const dateString =
    now.getMonth() === currentTime.getMonth() &&
    now.getDate() === currentTime.getDate()
      ? "今天"
      : new Date(day).getDate();

  const isPassed = currentTime.getDate() < now.getDate();
  if (isPassed) {
    return <td className={"disabled"}>{dateString}</td>;
  }

  return <td onClick={() => toSelect(currentTime)}>{dateString}</td>;
};

export default function DateSelector(props) {
  const { show, onBack, toSelect } = props;

  const monthSequence = getMonth();

  return (
    <div>
      {show ? (
        <Container>
          <Header title={"选择时间"} onBack={onBack}></Header>
          <SelectorTable>
            {monthSequence?.map((month) => (
              <Month toSelect={toSelect} startTimeInMonth={month} key={month} />
            ))}
          </SelectorTable>
        </Container>
      ) : (
        <></>
      )}
    </div>
  );
}
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  background-color: #fff;
  width: 100%;
  z-index: 1000;
`;
const SelectorTable = styled.div`
  padding: 15px 10px 15px 10px;
  background: #f3f3f3;
`;
