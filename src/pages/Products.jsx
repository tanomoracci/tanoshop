import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import {Footer} from '../components/Footer'
import Navbar from '../components/Navbar'
import {Newsletter} from '../components/Newsletter'

const Container = styled.div`

`
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    text-align: left;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    justify-content: flex-start;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
   margin: 20px 0px;
`
const Price = styled.div`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;    
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
    font-weight: 200;
`
const AddContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    cursor: pointer;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    margin-left: 10px;
    border-radius: 8px;
    &:hover {
        background-color: #f8f4f4;
    }
`

const Products = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src='https://images.squarespace-cdn.com/content/v1/579202971b631b5dbc741986/1591220116224-WGW6E75TT24SEOQBPY1M/b20029616e26c313af7db34884bb13a0.jpg?format=1500w'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Par de Jeans</Title>
                    <Desc>Jeans Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum mollitia error facere velit modi omnis dolores, veniam, fugit ut doloremque quibusdam recusandae alias magni cupiditate delectus atque expedita corrupti! Eum.
                    Cumque itaque hic laboriosam qui quod quibusdam recusandae dolore non unde consectetur! Magni est eaque nulla optio dolore iure quae minima alias nemo cum, inventore voluptate fuga esse odit laborum.</Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black'/>
                            <FilterColor color='darkblue'/>
                            <FilterColor color='grey'/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Tamaño</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                            <Button>Agregar al carrito</Button>
                        </AmountContainer>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Products
