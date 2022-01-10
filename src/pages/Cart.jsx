import React from 'react'
import NavBar from '../components/Navbar'
import Announcement from '../components/Announcement'
import {Footer} from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div`   
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
`
const TopTexts = styled.div`
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer; 
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Summary = styled.div`
    flex: 1; 
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    text-align: left;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.div``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const ProductSize = styled.span``

const PriceDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: centar;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    margin-bottom: 20px;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const ProductId = styled.div`
    flex: 1;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
    letter-spacing: 1.1;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    font-weight: 600;
    background-color: black;
    color: white;
    cursor: pointer; 
`

const Cart = () => {
    return (
        <Container>
            <NavBar />
            <Announcement />
                <Wrapper>
                    <Title>Tu orden</Title>
                    <Top>
                        <TopButton>Continuar compra</TopButton>
                        <TopTexts>
                            <TopText>Carrito (2)</TopText>
                            <TopText>Wishlist</TopText>
                        </TopTexts>
                        <TopButton type='filled'>Ir a check out</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            <Product> 
                                <ProductDetails>
                                    <Image src='https://cdn.shopify.com/s/files/1/0385/0174/4777/products/CAMISETA-MODERNA-DE-MIERDA.jpg?v=1599471902'/>
                                    <Details>
                                        <ProductName><b>Remera:</b> Super stampado moderno</ProductName>
                                        <ProductId> <b>ID:</b> 3424542545645</ProductId>
                                        <ProductColor color='black'></ProductColor>
                                        <ProductSize> M </ProductSize>
                                    </Details>
                                </ProductDetails>
                                <PriceDetails>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>2</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>$45</ProductPrice>
                                </PriceDetails>
                            </Product>
                            <Hr/>
                            <Product> 
                                <ProductDetails>
                                    <Image src='https://cdn.shopify.com/s/files/1/0385/0174/4777/products/CAMISETA-MODERNA-DE-MIERDA.jpg?v=1599471902'/>
                                    <Details>
                                        <ProductName><b>Remera:</b> Super stampado moderno</ProductName>
                                        <ProductId> <b>ID:</b> 3424542545645</ProductId>
                                        <ProductColor color='black'></ProductColor>
                                        <ProductSize> M </ProductSize>
                                    </Details>
                                </ProductDetails>
                                <PriceDetails>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>2</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice></ProductPrice>
                                </PriceDetails>
                            </Product>
                        </Info>
                        <Summary>
                            <SummaryTitle>SU ORDEN</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>SUBTOTAL</SummaryItemText>
                                <SummaryItemPrice>$80</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>FECHA DE DELIVERY ESTIMADO</SummaryItemText>
                                <SummaryItemPrice>16/10/22</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem >
                                <SummaryItemText>DESCUENTO EN ENVIO </SummaryItemText>
                                <SummaryItemPrice>$ -5,60</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type='total'>
                                <SummaryItemText>TOTAL</SummaryItemText>
                                <SummaryItemPrice>$80</SummaryItemPrice>
                            </SummaryItem>
                            <Button>CONFIRMAR COMPRA</Button>
                        </Summary>
                    </Bottom>
                </Wrapper>
            <Footer /> 
        </Container>
    )
}

export default Cart
