import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 375px;
  height: 240px;
  background-image: url("/public/bg-main-mobile.png");
  position: relative;
  @media screen and (min-width: 1440px) {
    background-image: url("/public/bg-main-desktop.png");
    width: 483px;
    height: 900px;
  }
`;

export const CardContainer = styled.div`
  width: 286px;
  height: 157px;
  background-image: url("/public/bg-card-front.png");
  background-repeat: no-repeat;
  background-position: -130px -30px;
  border: none;
  border-radius: 6px;
  position: relative;
  top: 118px;
  right: -18px;
  padding: 17px 21px 19.6px 19px;
  display: flex;
  flex-direction: column;
  gap: 37px;

  @media screen and (min-width: 1440px) {
    width: 447px;
    height: 245px;
    background-size: 580px 245px;
    top: 187px;
    left: 164px;
    padding: 28px 31px 26.6px 32px;
  }
`;

export const BackCardContainer = styled.div`
  width: 286px;
  height: 157px;
  position: absolute;
  top: 26px;
  right: 15px;
  background-image: url("/public/bg-card-back.png");
  background-repeat: no-repeat;
  background-size: 288px 157px;
  background-position: 0 6px;
  border: none;
  border-radius: 6px;

  @media screen and (min-width: 1440px) {
    background-size: 447px 245px;
    width: 447px;
    height: 245px;
    top: 469px;
    left: 258px;
  }
`;

export const BackCardP = styled.p`
  font-weight: 500;
  font-size: 9px;
  letter-spacing: 1.29px;
  text-align: right;
  text-transform: uppercase;
  color: #fff;
  position: relative;
  top: 78px;
  left: -32px;

  @media screen and (min-width: 1440px) {
    top: 119px;
    left: -58px;
    font-size: 14px;
    letter-spacing: 2px;
  }
`;

export const Top = styled.div``;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopImage = styled.img`
  width: 54px;
  height: 30px;
  @media screen and (min-width: 1440px) {
    width: 84px;
    height: 47px;
  }
`;

export const CardNumber = styled.div``;

export const CardInfo = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1440px) {
    justify-content: unset;
    gap: 180px;
  }
`;

export const CardHeading = styled.h1`
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  letter-spacing: 2.2px;

  @media screen and (min-width: 1440px) {
    font-size: 28px;
    letter-spacing: 3.42px;
  }
`;

export const CardName = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 9px;
  letter-spacing: 1.29px;
  text-transform: uppercase;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    letter-spacing: 2px;
    width: 200px;
  }
`;

export const CardDate = styled.p`
  font-weight: 500;
  font-size: 9px;
  color: #fff;
  letter-spacing: 1.29px;
  text-transform: uppercase;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    letter-spacing: 2px;
  }
`;

export const Date = styled.div`
  display: flex;
`;

export const ErrorParag = styled.p`
  color: #ff5050;
  font-weight: 500;
  font-size: 12px;
  margin-top: 8px;
  position: relative;
  left: -87px;
  @media screen and (min-width: 1440px) {
    left: -107px;
  }
`;
