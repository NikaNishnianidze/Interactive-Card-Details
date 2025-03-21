import styled from "styled-components";

export default function SectionTwo() {
  return (
    <>
      <InfoContainer>
        <Name>Cardholder Name</Name>
        <InfoInput placeholder="e.g. Jane Appleseed"></InfoInput>
        <Number>Card Number</Number>
        <InfoInput placeholder="e.g. 1234 5678 9123 0000"></InfoInput>
        <LastInputs>
          <DateDiv>
            <DateInfo></DateInfo>
            <DateInput></DateInput>
            <DateInput></DateInput>
          </DateDiv>
          <CvcDiv>
            <Cvc></Cvc>
            <CvcInput></CvcInput>
          </CvcDiv>
        </LastInputs>
      </InfoContainer>
    </>
  );
}

const InfoContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: 91px;
`;

const Name = styled.p`
  position: relative;
  top: 0;
  left: 0;
`;

const InfoInput = styled.input``;

const Number = styled.p``;

const LastInputs = styled.div``;

const DateDiv = styled.div``;

const DateInfo = styled.p``;

const DateInput = styled.input``;

const CvcDiv = styled.div``;

const Cvc = styled.p``;

const CvcInput = styled.input``;
