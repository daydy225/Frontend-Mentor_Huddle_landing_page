import React from 'react'
import { Content } from '../contents'
import { StyledCard } from './styles/Card.styled'

export const Card:React.FC<{content: Content}> = ({content: {id, title, body, image}}) => {
  return (
    <StyledCard layout={`${id % 2 === 0 && 'row-reverse'}`}>
    <div>
    <h2>{title}</h2>
    <p>{body}</p>
    </div>

    <div>
        <img src={`../../src/assets/${image}`} alt={title} />
    </div>

   </StyledCard>
  )
}
