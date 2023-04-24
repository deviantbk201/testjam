import SliderImage from "../atoms/Slide";
import { StyledSlider } from "@/styles/SliderStyles";
export default function Slider({ totalSlides }) {
  const SliderArray = [];
  for (let i = 1; i < totalSlides; i++) {
    SliderArray.push(i + 1);
  }

  return (
    <StyledSlider className="slider">
      {SliderArray.map((num) => {
        return (
          <SliderImage
            className="slide"
            src={`/logo-${num}.png`}
            size={100}
            alt="logo"
            key={num}
          />
        );
      })}
    </StyledSlider>
  );
}
