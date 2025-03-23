import "./App.css";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { useState } from "react";

interface Object {
  name: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
}

function App() {
  const [userInfo, setUserInfo] = useState<Object>({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  const [error, setError] = useState<string>({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  return (
    <>
      <GlobalStyles />
      <MainDiv>
        <SectionOne userInfo={userInfo} error={error} />
        <SectionTwo
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          error={error}
          setError={setError}
        />
      </MainDiv>
    </>
  );
}

export default App;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    gap: 349px;
  }
`;
