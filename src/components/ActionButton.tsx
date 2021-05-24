import styled from "styled-components";
import COLORS from "../styles/colors";

type ActionButtonProps = {
  children: React.ReactNode;
  clickHandler: () => void;
};

export default function ActionButton({ children, clickHandler }: ActionButtonProps) {
  return <ButtonWrapper onClick={clickHandler}>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
    border: 1px solid ${COLORS.primaryLight};
    background-color: ${COLORS.white};
    font-weight: 600;
    padding: 6px 12px;
    margin: 1px;
    width: 33%;

    &:hover {
      background-color: ${COLORS.primaryDark};
      color: ${COLORS.white}
    }

    &:active {
      border-color: ${COLORS.secondary};
      background-color: ${COLORS.primary}
    }
`;
