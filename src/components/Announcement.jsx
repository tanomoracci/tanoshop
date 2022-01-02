import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    font-size: 14px;
    font-weight: 800;
    align-items: center;
    justify-content: center;
`

const Announcement = () => {
    return (
        <Container>
            Super Promocion ! 50 % OFF para todas las compras del sitio!!!
        </Container>
    )
}

export default Announcement
