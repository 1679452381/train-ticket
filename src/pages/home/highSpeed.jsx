import styled from "@emotion/styled";
import React from "react";

export default function HighSpeed(props) {
  const { highSpeed, toggle } = props;
  return (
    <Container>
      <HighSpeedLable>只看高铁/动车</HighSpeedLable>
      <HighSpeedSwitch onClick={() => toggle()}>
        <input type={"hidden"} name="highSpeed" value={highSpeed} />
        {highSpeed ? (
          <HighSpeedTrack>
            {highSpeed ? <HighSpeedHandle /> : null}
          </HighSpeedTrack>
        ) : null}
      </HighSpeedSwitch>
    </Container>
  );
}

const Container = styled.div`
  padding: 0.5rem 0.5rem;
  position: relative;
  height: 46px;
  line-height: 46px;
  display: flex;
`;

const HighSpeedLable = styled.div`
  text-align: left;
  color: #888;
  font-size: 15px;
  flex: 1;
`;
const HighSpeedSwitch = styled.div`
  position: relative;
  text-align: right;
  flex: 1;
`;
const HighSpeedTrack = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 30px;
  padding: 1px;
  border-radius: 16px;
  background-color: #ccc;
  vertical-align: middle;
  box-sizing: border-box;
  :checked {
    background-color: #1ba9ba;
  }
  ::after {
    position: absolute;
    left: 15px;
    content: " ";
    width: 34px;
    height: 28px;
    background-color: #fafafa;
    border-radius: 0 15px 15px 0;
    transition: transform 0.13s ease-out;
  }
`;
const HighSpeedHandle = styled.span`
  position: absolute;
  z-index: 1000;
  top: 1px;
  left: 1px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: transform 0.1s ease-out;
  box-sizing: border-box;
  :checked {
    transform: translateX(20px);
  }
  ::after {
    transform: scale(0);
  }
`;
