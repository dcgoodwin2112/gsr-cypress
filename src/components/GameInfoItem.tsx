import styled from "styled-components";

type GameInfoItemProps = {
  children: React.ReactNode;
  amount: number;
};

export default function GameInfoItem({ children, amount }: GameInfoItemProps) {
  return (
    <InfoWrapper>
      <AmountWrapper>{amount}</AmountWrapper> {children}
    </InfoWrapper>
  );
}

const InfoWrapper = styled.div``;

const AmountWrapper = styled.span`
  font-weight: 700;
`;
