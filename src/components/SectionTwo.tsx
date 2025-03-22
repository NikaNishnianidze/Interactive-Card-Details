import React from "react";
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
  NumberError,
  MonthError,
  YearError,
  CvcError,
} from "../SectionTwoStyle";

import { ErrorParag } from "../SectionOneStyle";

interface SectionTwoProps {
  userInfo: Object;
  setUserInfo: React.Dispatch<React.SetStateAction<Object>>;
}

const SectionTwo: React.FC<SectionTwoProps> = ({
  userInfo,
  setUserInfo,
  error,
  setError,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    const formattedValue = event.target.value.replace(/\D/g, "");
  };

  const formatCardNumber = (number: string) => {
    let formattedValue = number.replace(/\D/g, "");

    formattedValue = formattedValue.replace(/(.{4})(?=.)/g, "$1 ");

    return formattedValue;
  };

  const checkValidation = (event) => {
    event.preventDefault();
    let cardNumber = userInfo.number;
    let cardName = userInfo.name;
    let month = userInfo.month;
    let year = userInfo.year;
    let cvc = userInfo.cvc;
    let hasError = false;

    let nameError = "";
    let numberError = "";
    let monthError = "";
    let yearError = "";
    let cvcError = "";

    if (/[^a-zA-Z ]/.test(cardName)) {
      nameError = "Name can't contain numbers ";
      hasError = true;
    }

    if (/[^0-9]/.test(cardNumber)) {
      numberError = "Wrong format, numbers only";
      hasError = true;
    }

    if (!month) {
      monthError = "can't be blank";
      hasError = true;
    }

    if (!year) {
      yearError = " can't be blank";
      hasError = true;
    }

    if (!cvc) {
      cvcError = "CVC can't be blank";
      hasError = true;
    }

    setError({
      name: nameError,
      number: numberError,
      month: monthError,
      year: yearError,
      cvc: cvcError,
    });
  };
  return (
    <>
      <InfoContainer onSubmit={checkValidation}>
        <Name>Cardholder Name</Name>
        <InfoInput
          placeholder="e.g. Jane Appleseed"
          name="name"
          onChange={handleChange}
          type="text"
        ></InfoInput>
        {error.name && (
          <ErrorParag style={{ color: "red" }}>{error.name}</ErrorParag>
        )}
        <Number>Card Number</Number>
        <InfoInput
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleChange}
          name="number"
          type="text"
          maxLength={19}
          value={formatCardNumber(userInfo.number)}
          style={{ border: error.number ? "1px solid #FF5050" : "" }}
        ></InfoInput>
        {error.number && (
          <NumberError style={{ color: "red" }}>{error.number}</NumberError>
        )}
        <LastInputs>
          <DateDiv>
            <DateInfo>Exp. Date (MM/YY)</DateInfo>
            <DateInput
              placeholder="MM"
              onChange={handleChange}
              name="month"
              type="text"
              maxLength={2}
              style={{ border: error.month ? "1px solid #FF5050" : "" }}
            ></DateInput>
            <DateInput
              placeholder="YY"
              onChange={handleChange}
              name="year"
              type="text"
              maxLength={2}
              style={{ border: error.year ? "1px solid #FF5050" : "" }}
            ></DateInput>
          </DateDiv>

          <CvcDiv>
            <Cvc>CVC</Cvc>
            <CvcInput
              placeholder="e.g. 123"
              onChange={handleChange}
              name="cvc"
              type="text"
              maxLength={3}
              style={{
                border: error.cvc ? "1px solid #FF5050" : "",
                position: "relative",
                zIndex: 1,
              }}
            ></CvcInput>
          </CvcDiv>
        </LastInputs>
        <Button type="submit">Confirm</Button>
      </InfoContainer>
    </>
  );
};

export default SectionTwo;
