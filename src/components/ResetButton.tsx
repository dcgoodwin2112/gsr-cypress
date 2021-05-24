import styled from "styled-components";
import COLORS from "../styles/colors";

type ResetButtonProps = {
  children: React.ReactNode;
  clickHandler: () => void;
}

export default function ResetButton({children, clickHandler}: ResetButtonProps) {
  return (
    <ResetWrapper>
      <ButtonWrapper onClick={clickHandler} name="reset">{children}</ButtonWrapper>
    </ResetWrapper>
  );
}

const ResetWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.button`
  margin: 0 auto;
  background-color: ${COLORS.secondary};
  color: ${COLORS.white};
  border: 2px solid ${COLORS.white};
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 6px 12px;

  &:hover {
    border-color: ${COLORS.primaryLight};
  }

  &:active {
    background-color: ${COLORS.grayDark};
    border-color: ${COLORS.secondary};
  }
`;
