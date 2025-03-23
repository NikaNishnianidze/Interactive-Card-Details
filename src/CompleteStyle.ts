import styled from "styled-components";

export const LastPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ThankImage = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 91px;
  @media screen and (min-width: 1440px) {
    margin-top: unset;
  }
`;

export const ThankP = styled.p`
  color: #21092f;
  font-weight: 500;
  font-size: 28px;
  letter-spacing: 3.42px;
  text-align: center;
  margin-top: 35px;
`;

export const GreyP = styled.p`
  color: #8f8694;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  margin-top: 16px;
  text-align: center;
`;

export const ContinueButton = styled.button`
  width: 327px;
  height: 53px;
  border: 1px solid #21092f;
  background-color: #21092f;
  border-radius: 8px;
  margin-top: 48px;
  margin-bottom: 82px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;

  @media screen and (min-width: 1440px) {
    width: 381px;
  }
`;
