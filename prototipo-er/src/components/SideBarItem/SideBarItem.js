import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

export default function SideBarItem({ active, Icon, text, link }) {
    function closeSideBar() {
        active(false)
      }
    return (
        <Link to={link}>
            <Container onClick={closeSideBar}>
                <Icon />
                {text}
            </Container>
        </Link>
    )
}
