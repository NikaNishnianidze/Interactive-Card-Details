import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 375px;
  height: 240px;
  background-image: url("/public/bg-main-mobile.png");
  position: relative;
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
`;

export const Top = styled.div``;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopImage = styled.img`
  width: 54px;
  height: 30px;
`;

export const CardNumber = styled.div``;

export const CardInfo = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardHeading = styled.h1`
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  letter-spacing: 2.2px;
`;

export const CardName = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 9px;
  letter-spacing: 1.29px;
  text-transform: uppercase;
`;

export const CardDate = styled.p`
  font-weight: 500;
  font-size: 9px;
  color: #fff;
  letter-spacing: 1.29px;
  text-transform: uppercase;
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
`;
