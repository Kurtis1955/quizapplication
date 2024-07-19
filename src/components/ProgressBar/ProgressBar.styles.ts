import styled from "styled-components";

type ThemeProps = {
    isSelected?: boolean;
}

export const ProgressWrapper = styled.div<ThemeProps>`
    height: 7px;
    width: '100%';
    background-color: ${({ isSelected }) => (isSelected ? "#3B4D66": "#FFFFFF")};
    border-radius: 6px;
    padding: 8px 5px;
    display: flex;
    align-items: center;
`

export const Progress = styled.div`
    height: 6px;
    background-color: #A729F5;
    border-radius: 6px;
`