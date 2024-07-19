import styled from "styled-components"
import backgroundImageMobileLight from "../../assets/images/pattern-background-mobile-light.svg"
import backgroundImageMobileDark from "../../assets/images/pattern-background-mobile-dark.svg"

import backgroundImageTabletLight from "../../assets/images/pattern-background-tablet-light.svg"
import backgroundImageTabletDark from "../../assets/images/pattern-background-tablet-dark.svg"

import backgroundDesktopImageLight from "../../assets/images/pattern-background-desktop-light.svg"
import backgroundDesktopImageDark from "../../assets/images/pattern-background-desktop-dark.svg"

type StyledWrapperProps = {
    isSelected?: boolean;
}
export const StyledWrapper =  styled.div<StyledWrapperProps>`
    width: 100%;
    height: 100vh;

    background-image: url(${({ isSelected }) => (isSelected ? backgroundImageMobileDark : backgroundImageMobileLight)});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${({ isSelected }) => (isSelected ? " #313E51;" : "#F4F6FA" )};

    @media screen and (min-width: 768px) {
        background-image: url(${({ isSelected }) => (isSelected ? backgroundImageTabletDark : backgroundImageTabletLight)});
        background-size: cover;
    }

    @media screen and (min-width: 1024px) {
        background-image: url(${( { isSelected }) => (isSelected ? backgroundDesktopImageDark : backgroundDesktopImageLight)});
        background-size: cover;
    }
`