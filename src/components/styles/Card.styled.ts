import {styled} from 'styled-components'

export const StyledCard = styled.div<{layout?: string;}>`
    display: flex;
    align-items: center;
    background-color: '#fff';
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    gap: 60px;
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({layout}) => layout || 'row'};

    /* img {
        width: 80%;
    } */

    & > div {
        flex: 1;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        gap: 20px;
        padding: 30px;


        h2 { 
            font-size: 0.9em;
            text-align: center;
        }

        p {
            font-size: 0.75em;
            text-align: center;
        }

        
    }
`