import styled from 'styled-components'
import COLORS from '../styles/colors'
import BREAKPOINTS from '../styles/breakpoints'

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <h1>Good cat, Sad cat, Rad cat</h1>
      </LogoWrapper>
    </HeaderWrapper>
  );
}

const LogoWrapper = styled.div`
  margin: 0 auto;

  & h1 {
    color: ${COLORS.white};
    padding: 8px 12px;
    letter-spacing: .2rem;
    font-size: 1.5rem;
    font-weight: 300;
  }
`

const HeaderWrapper = styled.header`
  background-color: ${COLORS.primary};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.8);

  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
