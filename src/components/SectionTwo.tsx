import {
  InfoContainer,
  Name,
  InfoInput,
  Number,
  LastInputs,
  DateDiv,
  DateInfo,
  DateInput,
  CvcDiv,
  Cvc,
  CvcInput,
  Button,
} from "../SectionTwoStyle";

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
