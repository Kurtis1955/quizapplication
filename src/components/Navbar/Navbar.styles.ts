import styled from "styled-components";
import { Image } from "../../pages/Quiz/Quiz.styles";

export const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ThemeSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const IconTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const NavImage = styled(Image)`
    margin: 0;
    width: 25px;
    height: 25px;
    
    @media screen and (min-width: 768px) {
        width: 56px;
        height: 56px;
    }
`