import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: white;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`

const Desc = styled.div`
    font-size: 24;
    font-weight: 300;
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 2;
    border: none; 
    background-color: teal;
    color: white;
`

export const Newsletter = () => {
    return (
        <Container>
            <Title>Sumate a nuestro Newsletter</Title>
            <Desc>Recibi en tu inbox las mejores promociones de temporada, no te lo pierdas! </Desc>
            <InputContainer>
                <Input placeholder='Your e-mail'></Input>
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}
