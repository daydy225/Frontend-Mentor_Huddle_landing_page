import styled from "styled-components"

export const StyledHeader = styled.header`
    background-color: ${ ({theme}) =>  theme.colors.header};
    background-image: url('../../src/assets/bg-hero-desktop.svg');
    padding: 40px 0;
    font-family: 'Poppins', sans-serif;
    

    @media (max-width: ${({theme}) => theme.mobile}) {
        padding: 20px 0;
        background-image: url('../../src/assets/bg-hero-mobile.svg');
    }
`
export const Nav = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 40px;


`

export const Logo = styled.img`
  

  @media (max-width: ${({theme}) => theme.mobile}) {
       width: 40%;
    }
`

export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media (max-width: ${({theme}) => theme.mobile}) {
        margin: 40px 0 30px; 
    }
`