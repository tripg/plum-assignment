import React from 'react'
import { HeaderContainer, Logo } from './styles'

const Navbar = () => {
  return (
    <HeaderContainer>
        <Logo isLeft/>
        <Logo/>
    </HeaderContainer>
  )
}

export default Navbar