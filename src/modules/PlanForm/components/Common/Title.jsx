import React from 'react'

import { TitleContainer, StyledTitle } from '../../styles'

const Title = ({ title, expanded, handleClick }) => {
    return (
        <TitleContainer onClick={handleClick}>
            <StyledTitle>
                {title}
            </StyledTitle>
            {/* <TitleChevronIcon expanded={expanded} /> */}
        </TitleContainer>
    )
}

export default Title