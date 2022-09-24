import styled from 'styled-components'

export const HeaderContainer = styled.div`
    position: absolute;
    height: 80px;
    left: 0px;
    right: 0px;
    top: 0px;
    background: #ECE9E5;
`

export const Logo = styled.div`
    position: absolute;
    width: 128px;
    height: 40px;
    left: ${props => props.isLeft ? '40px' : '1152px'};
    top: calc(50% - 40px/2);
    background: #E5E1DC;
    border-radius: 16px;
`