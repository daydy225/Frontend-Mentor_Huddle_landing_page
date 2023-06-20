import React from 'react'
import { Container } from './components/styles/Container.styled'
import { Header } from './components/Header'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import {contents, Content } from './contents'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { CommunityContainer, CommunityButton } from './components/styles/Community.styled'


const theme = {
  colors:{
    header: 'hsl(193, 100%, 96%)',
    body: '#fff',
    footer: 'hsl(192, 100%, 9%)'
  },
  // isToggle: false,
  mobile: '375px',
}

const  App:React.FC = () =>{


  return (
    <ThemeProvider theme={theme}>

    <>
    <GlobalStyles />
    <Header />
    <Container>
      {contents.map((content: Content, index) => {
        return <Card key={index} content={content} />
      }
      )}
    </Container>
     <CommunityContainer>
        <h2>Ready To Build Your Community?</h2>
        <CommunityButton color='#fff' bg='#ff0099'>Get Started For Free</CommunityButton>
     </CommunityContainer>
     <Footer />
    </>
    </ThemeProvider> 
  )
}

export default App
