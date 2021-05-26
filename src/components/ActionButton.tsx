import styled from "styled-components";
import COLORS from "../styles/colors";
import { ButtonProps } from "../types";

interface ActionButtonProps extends ButtonProps{
  name: string;
};

export default function ActionButton({ children, clickHandler, name }: ActionButtonProps) {
  return <ButtonWrapper onClick={clickHandler} name={name}>{children}</ButtonWrapper>;
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
