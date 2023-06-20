import styled from "styled-components";



export const Button = styled.button<({bg?:string; color?: string;})>`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: ${({bg}) => bg === '#ff0099' ? '16px 60px' : '12px 36px'};
  background-color: ${({bg}) => bg || '#fff'};
  color: ${({color}) => color || '#333'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }


  @media (max-width: ${({theme}) => theme.mobile}) {
     font-size: 11px;
     padding: ${({bg}) => bg === '#ff0099' ? '13px 36px' : '10px 20px'};
  }
`