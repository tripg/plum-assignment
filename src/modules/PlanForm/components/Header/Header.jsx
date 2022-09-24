import React from 'react'
import { Description, DescriptionContainer, HeaderContainer, Heading } from '../../styles'

const Header = ({ label, description }) => {
    return (
        <HeaderContainer>
            {/* <HeadingWrapper>
                <BackBtn /> */}
            <Heading>
                {label}
            </Heading>
            {/* </HeadingWrapper> */}
            {description &&
                <DescriptionContainer>
                    <Description>
                        {description}
                    </Description>
                </DescriptionContainer>
            }
        </HeaderContainer>
    )
}

export default Header