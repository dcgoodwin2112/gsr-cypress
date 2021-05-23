import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Banner from "./Banner";
import Footer from "./Footer";
import COLORS from "../styles/colors";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
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
  background-color: ${COLORS.grayDark};
`;
