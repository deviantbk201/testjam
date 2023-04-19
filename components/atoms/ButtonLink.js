import { StyledButtonLink } from "../styled/ButtonLinkStyles";

export default function ButtonLink({ name }) {
  return (
    <StyledButtonLink
      bgColor={({ theme }) => theme.color.black}
      colorHover={({ theme }) => theme.color.primary}
      bgColorHover={({ theme }) => theme.color.white}
    >
      {name}
    </StyledButtonLink>
  );
}
