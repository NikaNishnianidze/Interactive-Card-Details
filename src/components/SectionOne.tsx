import styled from "styled-components";
import CardCircles from "../../public/card-logo.svg";

export default function SectionOne() {
  return (
    <>
      <HeaderContainer>
        <BackCardContainer>
          <BackCardP>000</BackCardP>
        </BackCardContainer>

        <CardContainer>
          <Top>
            <TopImage src={CardCircles} alt="card circle images" />
          </Top>
          <Bottom>
            <CardNumber>
              <CardHeading>0000 0000 0000 0000</CardHeading>
            </CardNumber>
            <CardInfo>
              <CardName>JANE APPLESEED</CardName>
              <CardDate>00/00</CardDate>
            </CardInfo>
          </Bottom>
        </CardContainer>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  width: 375px;
  height: 240px;
  background-image: url("/public/bg-main-mobile.png");
  position: relative;
`;

const CardContainer = styled.div`
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

const BackCardContainer = styled.div`
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

const BackCardP = styled.p`
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

const Top = styled.div``;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopImage = styled.img`
  width: 54px;
  height: 30px;
`;

const CardNumber = styled.div``;

const CardInfo = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardHeading = styled.h1`
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  letter-spacing: 2.2px;
`;

const CardName = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 9px;
  letter-spacing: 1.29px;
  text-transform: uppercase;
`;

const CardDate = styled.p`
  font-weight: 500;
  font-size: 9px;
  color: #fff;
  letter-spacing: 1.29px;
  text-transform: uppercase;
`;
