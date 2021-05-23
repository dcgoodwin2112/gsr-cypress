import styled from 'styled-components'
import COLORS from '../styles/colors'

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <LayoutWrapper className="App">{children}</LayoutWrapper>;
}

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.grayDark};
`
