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
            <DateInfo>Exp. Date (MM/YY)</DateInfo>
            <DateInput placeholder="MM"></DateInput>
            <DateInput placeholder="YY"></DateInput>
          </DateDiv>
          <CvcDiv>
            <Cvc>CVC</Cvc>
            <CvcInput placeholder="e.g. 123"></CvcInput>
          </CvcDiv>
        </LastInputs>
        <Button>Confirm</Button>
      </InfoContainer>
    </>
  );
}

const InfoContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 45px;
  margin-top: 91px;
`;

const Name = styled.p`
  color: #21092f;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  left: -85px;
  margin-top: 20px;
`;

const InfoInput = styled.input`
  width: 327px;
  height: 45px;
  border: 1px solid #dfdee0;
  border-radius: 8px;
  padding: 0 0 0 16px;
  margin-top: 9px;
`;

const Number = styled.p`
  color: #21092f;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 20px;
  position: relative;
  left: -106px;
`;

const LastInputs = styled.div`
  display: flex;
  margin-top: 20px;
`;

const DateDiv = styled.div``;

const DateInfo = styled.p`
  color: #21092f;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const DateInput = styled.input`
  width: 72px;
  height: 45px;
  margin-top: 9px;
  margin-right: 8px;
  border: 1px solid #dfdee0;
  border-radius: 8px;
  padding-left: 16px;
`;

const CvcDiv = styled.div``;

const Cvc = styled.p`
  color: #21092f;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  left: 5px;
`;

const CvcInput = styled.input`
  width: 164px;
  height: 45px;
  border: 1px solid #dfdee0;
  border-radius: 8px;
  margin-top: 9px;
  margin-left: 3px;
  padding-left: 16px;
`;

const Button = styled.button`
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  width: 327px;
  border: 1px solid #21092f;
  background-color: #21092f;
  border-radius: 8px;
  height: 53px;
  margin-top: 28px;
`;
