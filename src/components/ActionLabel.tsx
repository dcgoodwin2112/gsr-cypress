import styled from "styled-components";
import COLORS from "../styles/colors"

type ActionLabelProps = {
  children: React.ReactNode;
  active?: boolean;
};

export default function ActionLabel({ children, active }: ActionLabelProps) {
  if (active === true) {
    return <ActiveLabelWrapper>{children}</ActiveLabelWrapper>;
  } else {
    return <LabelWrapper>{children}</LabelWrapper>;
  }
}

const LabelWrapper = styled.span`
  display: inline-block;
  padding-top: 6px;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${COLORS.primaryDark}
`;

const ActiveLabelWrapper = styled(LabelWrapper)`
  color: ${COLORS.secondary};
`;
