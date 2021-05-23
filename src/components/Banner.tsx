import styled from 'styled-components'
import COLORS from '../styles/colors'
import BREAKPOINTS from '../styles/breakpoints'

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>Rock Paper Scissors</LogoWrapper>
    </HeaderWrapper>
  );
}

const LogoWrapper = styled.div`
  margin: 0 auto;
  padding: 8px 12px;
  letter-spacing: .2rem;
  color: ${COLORS.white};
  font-size: 1.6rem;
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
