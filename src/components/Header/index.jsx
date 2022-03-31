import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as BackIcon } from "../../assets/svg/back.svg";

export default function Header(props) {
  const { onBack, title } = props;
  return (
    <Container>
      <span onClick={onBack}>
        <BackIcon className="icon_active" width={"1rem"} height={"1rem"} />
      </span>
      <span>{title}</span>
      <p></p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: #02b6fd;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
