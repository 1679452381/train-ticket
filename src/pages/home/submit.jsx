import styled from "@emotion/styled";
import React, { memo } from "react";

export default memo(function Submit() {
  return (
    <SubmitContaniner>
      <Button type="submit"> 搜索 </Button>
    </SubmitContaniner>
  );
});

const SubmitContaniner = styled.div`
  margin: 0.5rem 0.5rem;
  padding: 1rem 0 1.7rem 0;
`;
const Button = styled.button`
  background-color: #f90;
  height: 40px;
  line-height: 40px;
  color: #fff;
  border-radius: 6px;
  border: 0;
  padding: 0;
  margin: 0;
  display: block;
  width: 100%;
`;
