import "./App.css";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainDiv>
        <SectionOne />
        <SectionTwo />
      </MainDiv>
    </>
  );
}

export default App;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
