import { useContext } from "react"
import { StyledSlider, StyledSwitch } from "./Switch.styles"
import { AppContext } from "../../context/Appcontext"

export default function Switch() {
  const { isSelected, setIsSelected } = useContext(AppContext)

  return (
    <StyledSwitch onClick={() => setIsSelected(prev => !prev)}>
      <StyledSlider isSelected={isSelected} />
    </StyledSwitch>
  )
}
