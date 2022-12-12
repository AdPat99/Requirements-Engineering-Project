import React from 'react'
import SideBarItem from '../SideBarItem/SideBarItem'
import { Container, Content } from './styles'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function SideBar({ active, menuList }) {
  function closeSideBar() {
    active(false)
  }

  const sideBarList = menuList.map(item => {
    return <SideBarItem active={active} Icon={item.icon} text={item.option} link={item.route} />
  })

  return (

    <Container sideBar={active}>
      <FaTimes onClick={closeSideBar} />
      <Content>
        {sideBarList}
      </Content>
    </Container>
  )
}
