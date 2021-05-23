import styled from "styled-components";
import COLORS from "../styles/colors";

export default function Footer() {
  return (
    <FooterWrapper>
      <LinkWrapper href="https://github.com/dcgoodwin2112/rock-paper-scissors">
        View on GitHub
      </LinkWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  text-align: center;
  padding: 36px;
`;

const LinkWrapper = styled.a`
  color: ${COLORS.white};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;
