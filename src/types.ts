export interface WithChildrenProps {
  children: React.ReactNode;
}

export interface ButtonProps extends WithChildrenProps {
  clickHandler: () => void;
}
