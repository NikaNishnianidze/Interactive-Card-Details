import CardCircles from "../../public/card-logo.svg";
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
} from "../SectionOneStyle";

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
