import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(125,225,255,0.5)), 
        url("https://pavilionburgundy.es/wp-content/uploads/2021/03/DSC4782-scaled.jpg")
        center !important;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;    
    background-color: rgba(255,255,255,0.6);
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;
`
    
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Crear Cuenta</Title>
                <Form>
                    <Input placeholder='Nombre'/>
                    <Input placeholder='Apellido'/>
                    <Input placeholder='Mail'/>
                    <Input placeholder='Nombre de Uusuario'/>
                    <Input placeholder='Contraseña'/>
                    <Input placeholder='Confirmar Contraseña'/>
                    <Agreement>Lorem giat excepturi, minus voluptatem dolorem maxime dignissimos autem explicabo eum exercitationem fugit, obcaecati illum praesentium natus iure reprehenderit illo! Quasi, laboriosam.</Agreement>
                    <Button>Crear Cuenta</Button>
                </Form>
            </Wrapper>

        </Container>
    )
}

export default Register
