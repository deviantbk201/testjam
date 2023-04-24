import Slider from "../molucles/Slider";
import { StyledFeaturedSection } from "../styled/FeaturedSectionStyles";
import {
  HeadingSecondary,
  HeadingTertiary,
  SubHeading,
} from "../atoms/Typography";
import "../../styles/FeaturedSection.module.css";
export default function FeaturedSection() {
  return (
    <StyledFeaturedSection>
      <HeadingTertiary
        className="featured-heading-tertiary"
        text="Innovative brands that trust us"
      />
      <Slider className="featured-slide" totalSlides={16} />
      <div>
        <HeadingSecondary
          className="featured-heading"
          text="We are Scaling Ideas"
          textAlign="center"
        />
        <SubHeading
          className="featured-subheading"
          text="Giving Your ideas right platform to succeed"
          textAlign="center"
        />
      </div>
    </StyledFeaturedSection>
  );
}
