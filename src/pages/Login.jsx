import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(125,225,255,0.5)), 
        url("https://www.hola.com/imagenes/moda/tendencias/20210417187869/estampado-flores-primavera-looks/0-941-268/estampadofloral2t-t.jpg")
        center !important;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;    
    background-color: rgba(255,255,255,0.6);
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;
`
    
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Link = styled.a`
    margin: 10px 0px;
    text-decoration: underline;
    font-size: 12;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Ingreso</Title>
                <Form>
                    <Input placeholder='Nombre de Uusuario'/>
                    <Input placeholder='Contraseña'/>
                    <Button>Ingresar</Button>
                    <Link>Olvidaste tu clave ?</Link>
                    <Link>Crea tu cuenta</Link>
                </Form>
            </Wrapper>

        </Container>
    )
}

export default Login
