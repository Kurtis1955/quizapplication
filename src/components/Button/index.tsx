import { ButtonStyle } from "./Button.styles"
type ButtonProps = {
    children: string;
    onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {

  return (
    <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
  )
}
