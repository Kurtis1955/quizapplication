import styled from "styled-components";


type StyledCardProps = {
    selected?: boolean;
    isCorrectAnswer?: boolean | null;
    isSubmitClicked?: boolean | null;
    isSelected?: boolean;
}

export const CardStyle = styled.section<StyledCardProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    border: ${({ selected, isCorrectAnswer, isSubmitClicked }) =>
        ( selected && isSubmitClicked && isCorrectAnswer
        ? "4px solid #26D782"
        : selected && isSubmitClicked
        ? "4px solid #EE5454"
        : selected && "4px solid #A729F5" 
        )};
    
    background-color: ${({ isSelected }) => (isSelected ? "#3B4D66;" : "#ffffff")};
    padding: 12px;
    border-radius: 12px;
    box-shadow: -1px 5px 13px 0px ${({ isSelected }) => (isSelected ? "#313E51;" : "#F4F6FA;")};
    cursor: pointer;

    

    @media screen and (min-width: 768px) {
        border-radius: 24px;
        gap: 32px;
    }

`