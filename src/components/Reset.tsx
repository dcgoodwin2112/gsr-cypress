import styled from "styled-components";
import COLORS from "../styles/colors";

type RestProps = {
  onClick: () => void;
}

export default function Reset({onClick}: RestProps) {
  return (
    <ResetWrapper>
      <ButtonWrapper onClick={onClick}>Reset Session</ButtonWrapper>
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
  border: 3px solid lightgray;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 6px 12px;

  &:hover {
    border-color: ${COLORS.primaryLight};
  }
`;
