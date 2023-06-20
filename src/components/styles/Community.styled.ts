import styled from "styled-components";
import { Button } from "./Button.styled";

export const CommunityContainer = styled.div`
   background-color: ${({theme}) => theme.colors.body};
   width: 600px;
   display: flex;
   padding: 20px;
   margin: 0 auto;
   position: relative;
   z-index: 10;
   bottom: -70px;
   border-radius: 15px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);  
   align-items: center;
   gap: 20px;
   flex-direction: column;

   

  
   @media (max-width: ${({theme}) => theme.mobile}) {
    width: 90%;
    margin: 0 20px;
    

    h2 {
        font-size: 14px;
    }
  }
`

export const CommunityButton = styled(Button)`
    font-size: 14px;


    @media (max-width: ${({theme}) => theme.mobile}) {
    font-size: 11px;
  }
`