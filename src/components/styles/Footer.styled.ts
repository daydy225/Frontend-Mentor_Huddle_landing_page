import styled from "styled-components"
import { Logo } from "./Header.styled"

export const StyledFooter = styled.footer`
   background-color: ${({theme}) => theme.colors.footer};
   color: #fff;
   padding: 120px 0 60px;

   ul {
    list-style-type: none;
   }

   ul li {
    margin-bottom: 20px;
    font-size: 15px;
   }
  
   svg {
      font-size: 20px;
   } 
   

   ul:nth-of-type(1) li {
     display: flex;
     align-items: center;
     gap: 10px;
   }

   ul:nth-of-type(1) li:nth-child(1) svg  {
    font-size:  70px;
   }
   
   ul:nth-of-type(2) li:hover, ul:nth-of-type(3) li:hover  {
     text-decoration: underline;
   }

    
 
   p {
     text-align: right;
          
   }


    @media (max-width: ${({theme}) => theme.mobile}) {
        text-align: center;

        
        ul {
            padding: 0;
            font-size: 14px;
        }
        
        ul:nth-of-type(1) li {
        display: flex;
        flex-direction: column;
       }

       ul:nth-of-type(1) li:nth-child(1) svg  {
       font-size:  30px;
      } 


        p {
            text-align: center;
        }
    }

`

export const LogoWhite = styled(Logo)`
    width: 180px;
    margin-bottom: 10px;
`