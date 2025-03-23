import styled from "styled-components";

export const InfoContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 45px;
  margin-top: 91px;
  @media screen and (min-width: 1440px) {
    margin-top: unset;
  }
`;

export const Name = styled.p`
  color: #21092f;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  left: -85px;
  margin-top: 20px;

  @media screen and (min-width: 1440px) {
    left: -110px;
  }
`;

export const InfoInput = styled.input`
  width: 327px;
  height: 45px;
  border: 1px solid #dfdee0;
  border-radius: 8px;
  padding: 0 0 0 16px;
  margin-top: 9px;

  @media screen and (min-width: 1440px) {
    width: 381px;
  }
`;

export const Number = styled.p`
  color: #21092f;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 20px;
  position: relative;
  left: -106px;

  @media screen and (min-width: 1440px) {
    left: -130px;
  }
`;

export const LastInputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const DateDiv = styled.div``;

export const DateInfo = styled.p`
  color: #21092f;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media screen and (min-width: 1440px) {
    position: relative;
    left: 7px;
  }
`;

export const DateInput = styled.input`
  width: 72px;
  height: 45px;
  margin-top: 9px;
  margin-right: 8px;
  border: 1px solid #dfdee0;
  border-radius: 8px;
  padding-left: 16px;

  @media screen and (min-width: 1440px) {
    width: 80px;
  }
`;

export const CvcDiv = styled.div``;

export const Cvc = styled.p`
  color: #21092f;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  left: 5px;

  @media screen and (min-width: 1440px) {
    left: 20px;
  }
`;

export const CvcInput = styled.input`
  width: 164px;
  height: 45px;
  border: 1px solid #dfdee0;
  border-radius: 8px;
  margin-top: 9px;
  margin-left: 3px;
  padding-left: 16px;

  @media screen and (min-width: 1440px) {
    width: 191px;
    margin-left: 12px;
  }
`;

export const Button = styled.button`
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  width: 327px;
  border: 1px solid #21092f;
  background-color: #21092f;
  border-radius: 8px;
  height: 53px;
  margin-top: 28px;

  @media screen and (min-width: 1440px) {
    margin-top: 40px;
    width: 381px;
  }
`;

export const NumberError = styled.p`
  position: relative;
  left: -85px;
  color: #ff5050;
  font-weight: 500;
  font-size: 12px;
  margin-top: 8px;

  @media screen and (min-width: 1440px) {
    left: -106px;
  }
`;

export const MonthError = styled.p`
  position: relative;
  left: -161px;
  top: 42px;
  color: #ff5050;
  font-weight: 500;
  font-size: 12px;
  margin-top: 12px;
`;

export const YearError = styled.p`
  position: relative;
  left: -150px;
  top: 42px;
  color: #ff5050;
  font-weight: 500;
  font-size: 12px;
  margin-top: 12px;
`;

export const CvcError = styled.p`
  position: relative;
  left: -130px;
  top: 42px;
  color: #ff5050;
  font-weight: 500;
  font-size: 12px;
  margin-top: 8px;
`;
