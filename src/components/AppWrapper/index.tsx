import { StyledWrapper } from "./AppWrapper.styles";

import { AppContext } from "../../context/Appcontext";
import { useContext } from "react";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const { isSelected } = useContext(AppContext)

  return (
    <StyledWrapper isSelected={isSelected}>
      {children}
    </StyledWrapper>
  )
}
