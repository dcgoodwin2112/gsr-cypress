import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Banner from "./Banner";
import Footer from "./Footer";
import COLORS from "../styles/colors";
import type { WithChildrenProps } from "../types";

export default function Layout({ children }: WithChildrenProps) {
  return (
    <LayoutWrapper className="App">
      <GlobalStyles />
      <Banner />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background: url("/tuna_left_side.png") ${COLORS.grayDark} bottom left no-repeat;
`
