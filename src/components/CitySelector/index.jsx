import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState, memo, useCallback } from "react";

import { ReactComponent as BackIcon } from "../../assets/svg/back.svg";
import { ReactComponent as DelIcon } from "../../assets/svg/delete.svg";

const CityItem = (props) => {
  const { city, toSelect } = props;
  return (
    <CityItemLi onClick={() => toSelect(city.name)}>{city.name}</CityItemLi>
  );
};

const CityItemLi = styled.div`
  list-style: none;
  height: 2rem;
  border-bottom: 0.1px solid whitesmoke;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
`;

const CityList = (props) => {
  const { section, toSelect } = props;
  // console.log(section);
  return (
    <CityListContainer>
      <CityListTitle data-cate={section.title}>{section.title}</CityListTitle>
      {section.citys?.map((city) => (
        <CityItem city={city} key={city.name} toSelect={toSelect} />
      ))}
    </CityListContainer>
  );
};

const CityListContainer = styled.div`
  border-bottom: 0.1px solid whitesmoke;
`;
const CityListTitle = styled.div`
  background-color: #cccccc;
  height: 2rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
`;

const CitySections = (props) => {
  const {
    cityData: { cityList: sections },
    toSelect,
  } = props;
  return (
    <div>
      {sections?.map((section) => (
        <CityList key={section.title} section={section} toSelect={toSelect} />
      ))}
    </div>
  );
};

const alphabet = Array.from(new Array(26), (ele, index) => {
  return String.fromCharCode(65 + index);
});

const AlphabetIdx = memo((props) => {
  const { alpha, onClick } = props;
  return (
    <AlphabetIdxConatainer onClick={() => onClick(alpha)}>
      {alpha}
    </AlphabetIdxConatainer>
  );
});
const AlphabetIdxConatainer = styled.div`
  height: 1rem;
  padding: 0.1rem 0;
`;

const SuggestItem = memo((props) => {
  const { name, toSelect } = props;
  return <SuggestItemI onClick={() => toSelect(name)}>{name}</SuggestItemI>;
});

const SuggestItemI = styled.div`
  list-style: none;
  height: 2rem;
  border-bottom: 0.1px solid whitesmoke;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
`;

const Suggest = memo((props) => {
  const [result, setResult] = useState([]);

  const { searchKey, toSelect } = props;

  useEffect(() => {
    fetch("/rest/search?key=" + encodeURIComponent(searchKey))
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;
        setResult(result);
      });
  }, [searchKey]);

  const fallBackResult = useMemo(() => {
    if (!result.length) {
      return [
        {
          display: searchKey,
        },
      ];
    }

    return result;
  }, [result, searchKey]);
  return (
    <SuggestContainer>
      {fallBackResult?.map((item) => (
        <SuggestItem
          key={item.display}
          name={item.display}
          toSelect={toSelect}
        />
      ))}
    </SuggestContainer>
  );
});
const SuggestContainer = styled.div`
  background-color: #fff;
  /* font-size: ; */
  position: absolute;
  top: 3.5rem;
  width: 100%;
  bottom: 0;
  z-index: 100;
`;

export default function CitySelector(props) {
  const { show, cityData, isLoadingCityData, onBack, fetchCityData, toSelect } =
    props;

  const [searchkey, setSearchKey] = useState("");

  const key = useMemo(() => searchkey.trim(), [searchkey]);

  useEffect(() => {
    if (!show || isLoadingCityData || cityData) {
      return;
    }
    fetchCityData();
  }, [show, isLoadingCityData, cityData]);

  const toAlpha = (alpha) => {
    document.querySelector(`[data-cate='${alpha}']`).scrollIntoView();
  };

  const toSelcetAndClear = useCallback((m) => {
    toSelect(m);
    setSearchKey("");
  }, []);

  return (
    <div>
      {show && cityData ? (
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
          <ContentContainer>
            {Boolean(key) && (
              <Suggest searchKey={key} toSelect={toSelcetAndClear} />
            )}
            <CitySections cityData={cityData} toSelect={toSelect} />
            <AlphabetContainer>
              {alphabet.map((alpha) => (
                <AlphabetIdx key={alpha} onClick={toAlpha} alpha={alpha} />
              ))}
            </AlphabetContainer>
          </ContentContainer>
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
const ContentContainer = styled.div`
  margin-top: 3.5rem;
`;
const AlphabetContainer = styled.div`
  position: fixed;
  right: 0.1rem;
  top: 4rem;
  color: #666699;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(204, 204, 204, 0.6);
  border-radius: 1rem;
  opacity: 0.7;
`;
const HeaderSearch = styled.div`
  position: fixed;
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
