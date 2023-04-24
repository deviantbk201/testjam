import { StyledFooterSection } from "../styled/FooterSectionStyles";
import Card from "../molucles/Card";
import { HeadingSecondary, Text } from "../atoms/Typography";
import Image from "next/image";
export default function FooterSection() {
  return (
    <StyledFooterSection>
      <Card className="contact__card">
        <HeadingSecondary className="contact__card-title" text="Address" />
        <div className="contact__card-x">
          <span className="card-icon-box">
            {/* <Image
              className="card-icon"
              src="/location.svg"
              width={20}
              height={20}
            /> */}
            <h2>Img</h2>
          </span>
          <Text
            className="card-text"
            text="B-205, ikeva co-working space, Supreme Business Park, Hiranandani Gardens, Powai, Mumbai, India"
          />
        </div>
        <div className="contact__card-x">
          <span className="card-icon-box">
            {/* <Image
              className="card-icon"
              src="/phone.svg"
              width={20}
              height={20}
            /> */}
            <h2>Img</h2>
          </span>
          <Text text="1234567890" />
        </div>
        <div className="contact__card-x">
          <span className="card-icon-box">
            {/* <Image
              className="card-icon"
              src="/email.svg"
              width={20}
              height={20}
            /> */}
            <h2>Img</h2>
          </span>
          <Text
            className="contact__card-email"
            text="xyz@emaail.com
          "
          />
        </div>
      </Card>
    </StyledFooterSection>
  );
}
