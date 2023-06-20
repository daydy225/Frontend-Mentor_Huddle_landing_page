import React from 'react'
import { SocialIcons } from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import logoWhite from '../assets/logo_white.svg'
import { StyledFooter, LogoWhite } from './styles/Footer.styled'
import { MdLocationOn, MdOutlineMailOutline  } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'

export const Footer:React.FC = () => {
  return (
    <StyledFooter>
        <Container>
            <LogoWhite src={logoWhite} alt="logo"/>

            <Flex>
                <ul>
                   <li>
                     <MdLocationOn />
                     <span>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi libero.
                    </span>
                   </li> 
                   <li><BiPhoneCall /> <span>+ 1-543-123-4567</span></li>
                   <li><MdOutlineMailOutline /> <span>example@huddle.com</span></li>
                </ul>
                <ul>
                     <li>About Us</li>
                     <li>What We Do</li>
                     <li>FAQ</li>
                </ul>
                <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                </ul>
                <SocialIcons />
            </Flex> 
            <p>&copy; 2023 Huddle. All rights reserved</p>
        </Container>
    </StyledFooter>
  )
}
