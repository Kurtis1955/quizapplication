import styled from "styled-components";
import { Link } from "react-router-dom";

type StyledHomeProps = {
    isSelected?: boolean;
}


export const StyledHome = styled.section<StyledHomeProps>`
    margin-top: 50px;

    @media screen and (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 32px;
    }

    @media screen and (min-width: 1280px) {
        margin-top: 10%;
    }


`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1024px) {
        width: 50%;
    }
`

export const StyledTitle = styled.div`
    font-size: 40px;
    color: #313E51;

    @media screen and (min-width: 768px) {
        font-size: 64px;
    }
`
export const WelcomeTitle = styled.div<StyledHomeProps>`
    font-weight: 300;
    color: ${({ isSelected }) => (isSelected && "white;")}
`

export const StyledSubtitle = styled.div<StyledHomeProps>`
    font-weight: 500;
    color: ${({ isSelected }) => (isSelected && "white;")}
`


export const StyledDesc = styled.p<StyledHomeProps>`
    font-size: 14px;
    font-style: italic;
    color: ${({ isSelected }) => (isSelected ? "#ABC1E1;" : "#626C7F;")}
    margin-top: 15px;
    line-height: 150%;


    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`

export const StyledCardWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 50px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        gap: 20px;
    }

    @media screen and (min-width: 1024px) {
        width: 50%;
        margin-top: 0;
        gap: 20px;
    }
`

export const StyledQuizTitle = styled.h1<StyledHomeProps>`
    font-size: 18px;
    font-weight: 500;
    color: ${({ isSelected }) => (isSelected ? "white;" : "#313E51;")}

    @media screen and (min-width: 768px) {
        font-size: 28px;
    }
`
export const IconWrapper = styled.div`
    border-radius: 8px;
    padding: 5px 6px;

    @media screen and (min-wdith: 768px) {
        border-radius: 12px;
    }
`

export const HtmlWrapper = styled(IconWrapper)`
    background-color: #FFF1E9;
`

export const CssWrapper = styled(IconWrapper)`
    background-color: #E0FDEF;
`
export const JsWrappper = styled(IconWrapper)`
    background-color: #EBF0FF;
`

export const AcWrapper = styled(IconWrapper)`
    background-color: #F6E7FF;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`