import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import classnames from "classnames";

import { ReactComponent as BackIcon } from "../../assets/svg/back.svg";
import { ReactComponent as DelIcon } from "../../assets/svg/delete.svg";

export default function CitySelector(props) {
  const { show, cityData, isLoadingCityData, onBack, fetchCityData } = props;

  const [searchkey, setSearchKey] = useState("");

  const key = useMemo(() => searchkey.trim(), [searchkey]);

  useEffect(() => {
    if (!show || isLoadingCityData || cityData) {
      return;
    }
    fetchCityData();
  }, [show, isLoadingCityData, cityData]);
  return (
    <div>
      {show ? (
        <Container>
          <HeaderSearch>
            <BackIcon height={"1rem"} width={"1rem"} onClick={onBack} />
            <SearchInput
              type="text"
              placeholder="输入车站，城市，首字母"
              value={searchkey}
              onChange={(e) => {
                setSearchKey(e.target.value.trim());
              }}
            />

            {key.length === 0 ? (
              <></>
            ) : (
              <SearchI onClick={() => setSearchKey(" ")}>
                <DelIcon height={"1rem"} width={"1rem"} />
              </SearchI>
            )}
          </HeaderSearch>
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
const HeaderSearch = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: #02b6fd;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SearchInput = styled.input`
  padding: 0.3rem 1rem;
  width: 70%;
  height: 1.5rem;
  outline: 0;
  border: none;
  border-radius: 0.2rem;
  :focus {
    /* border-bottom: 1px solid gray; */
  }
`;
const SearchI = styled.i`
  position: absolute;
  right: 2rem;
  top: 1.2rem;
`;
