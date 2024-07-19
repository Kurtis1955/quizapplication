import styled from "styled-components"

type StyledSliderProps = {
    isSelected: boolean;
}

export const StyledSwitch = styled.section`
    width: 45px;
    height: 26px;
    display: flex;
    background-color: #A729F5;
    border-radius: 14px
`

export const StyledSlider = styled.div<StyledSliderProps>`
    width: 20px;
    height: 20px;
    border-radius: 12px;
    margin-top: 3px;
    margin-left: ${({ isSelected }) => isSelected ? "22px" : "3px"};
    background-color: white;
    transition: margin-left 0.2s ease;
`