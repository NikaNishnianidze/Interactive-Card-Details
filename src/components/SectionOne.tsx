import CardCircles from "../../public/card-logo.svg";
import React from "react";
import {
  HeaderContainer,
  CardContainer,
  BackCardContainer,
  BackCardP,
  Top,
  TopImage,
  Bottom,
  CardNumber,
  CardInfo,
  CardHeading,
  CardName,
  CardDate,
  Date,
  ErrorParag,
} from "../SectionOneStyle";
import SectionTwo from "./SectionTwo";

interface SectionOneProps {
  userInfo: Object;
}

const SectionOne: React.FC<SectionOneProps> = ({ userInfo, error }) => {
  return (
    <>
      <HeaderContainer>
        <BackCardContainer>
          <BackCardP>{userInfo.cvc || "000"}</BackCardP>
        </BackCardContainer>

        <CardContainer>
          <Top>
            <TopImage src={CardCircles} alt="card circle images" />
          </Top>
          <Bottom>
            <CardNumber>
              <CardHeading>
                {userInfo.number || "0000 0000 0000 0000"}
              </CardHeading>
            </CardNumber>
            <CardInfo>
              <CardName>{userInfo.name || "JANE APPLESEED"}</CardName>
              <Date>
                <CardDate>{userInfo.month || "00"}/</CardDate>
                <CardDate>{userInfo.year || "00"}</CardDate>
              </Date>
            </CardInfo>
          </Bottom>
        </CardContainer>
      </HeaderContainer>
    </>
  );
};

export default SectionOne;
