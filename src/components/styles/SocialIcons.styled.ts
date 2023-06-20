import {styled} from 'styled-components';

export const StyledSocialIcons = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   a {
     border: 1px solid #fff;
     border-radius: 50%;
     color: #fff;
     display: inline-flex;
     align-items: center;
     justify-content: center;
     margin-right: 10px;
     width: 40px;
     height: 40px;
     text-decoration: none;     
   }

   a:hover {
     border-color: #ff0099;
   }
  
   li {
      list-style: none;
   }
   
   li svg {
     font-size: 20px;
   }

   li svg:hover {
      color: #ff0099;
   }
   

`