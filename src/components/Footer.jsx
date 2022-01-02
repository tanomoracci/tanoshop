import { Facebook, Instagram, MailOutline, PhoneAndroidOutlined, Pinterest, Room } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;

`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`

`

const Logo = styled.h1`
    text-align: flex-start;
    color: grey;
    font-size: 34px;
`

const Desc = styled.p`
    margin: 10px 0px;
`
const SocialIcons = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    padding: 5px;
`

export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Tano's Shop</Logo>
                <Desc>Lo soluta quaerat officiis eius assumenda qui ducimus non, maxime, ab saepe est! Ab quo quod quam. Quibusdam autem earum iure praesentium vo iure sequi necessitatibus cum unde? Saepe, quibusdam?
                Laborum fuga cum a suscipit omnis. Nemo, mollitia esse. Cupiditate quae ea quia ratione praesentium illo adipisci vero, error numquam autem. Commodi, iusto. Nisi obcaecati, ipsa ex iste quasi aspernatur.
                </Desc>
                <SocialIcons>
                    <SocialIcon color='3b5999'> <Facebook /> </SocialIcon>
                    <SocialIcon color='E4405F'> <Instagram /> </SocialIcon>
                    <SocialIcon color='E60023'><Pinterest /> </SocialIcon>
                </SocialIcons>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Kids Fashion</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: '10px'}} />
                    Valencia 482, Barcelona
                    </ContactItem>
                <ContactItem>
                    <PhoneAndroidOutlined style={{marginRight: '10px'}} />
                    +34 655 78 96 87
                    </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: '10px'}} /> 
                    contact@tanoshop.com
                    </ContactItem>
            </Right>

        </Container>
    )
}
