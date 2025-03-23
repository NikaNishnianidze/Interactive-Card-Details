import {
  ThankImage,
  LastPage,
  ThankP,
  GreyP,
  ContinueButton,
} from "../CompleteStyle";
import thankImage from "../../public/icon-complete.svg";

const Complete = () => {
  return (
    <LastPage>
      <ThankImage src={thankImage} alt="completed icon" />
      <ThankP>THANK YOU!</ThankP>
      <GreyP>We've added your card details</GreyP>
      <ContinueButton>Continue</ContinueButton>
    </LastPage>
  );
};

export default Complete;
