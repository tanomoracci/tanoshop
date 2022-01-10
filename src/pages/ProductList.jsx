import Announcement from '../components/Announcement'
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'

const Container = styled.div`

`
const Title = styled.h1`

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1.3;
`
const Select = styled.select`
    padding: 10px;
    margin: 10px;
    text-align: center;
`
const Option = styled.option``    


const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                <Option disabled select>
                Color
                </Option>
                <Option>Rojo</Option>
                <Option>Azul</Option>
                <Option>Amarillo</Option>
                <Option>Negro</Option>
                <Option>Violeta</Option>
                </Select>
                <Select>
                <Option disabled select>
                Tamaño
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                <Option selected>
                Novedades
                </Option>
                <Option>Mayor Precio</Option>
                <Option>Menor Precio</Option>
                
                </Select>
            </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
