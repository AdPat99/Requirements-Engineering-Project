import React, { useState } from 'react'
import { Container,Title } from './styles'
import { FaBars } from 'react-icons/fa'
import SideBar from '../SideBar/SideBar'
import { Routes, Route } from 'react-router-dom'

import {
  FaHome,
  FaRegMap,
  FaCalendarAlt,
} from 'react-icons/fa'

import {
  MdEditNotifications,
  MdOutlineDashboardCustomize
} from "react-icons/md";

import { RiContactsBookLine } from "react-icons/ri";

export default function Header() {

  const [sideBar, setSideBar] = useState(false)

  const showSideBar = () => {
    setSideBar(!sideBar)
  }

  const menuList = [
    { "id": 1, "option": "Home", "route": "/", "icon": FaHome },
    { "id": 2, "option": "Route", "route": "/route", "icon": FaRegMap },
    { "id": 3, "option": "Notifications", "route": "/notifications", "icon": MdEditNotifications },
    { "id": 4, "option": "Calender", "route": "/calender", "icon": FaCalendarAlt },
    { "id": 5, "option": "Priority Contacts", "route": "/contacts", "icon": RiContactsBookLine },
    { "id": 6, "option": "Customizations", "route": "/customizations", "icon": MdOutlineDashboardCustomize },
  ]

  return (
    <Container>
      <FaBars onClick={showSideBar} />
      <Routes>
            <Route path="/" exact element={<Title>Home</Title>}/>
            <Route path="/calender" exact element={<Title>Calender</Title>}/>
            <Route path="/contacts" exact element={<Title>Priority Contacts</Title>}/>
            <Route path="/customizations" exact element={<Title>Customizations</Title>}/>
            <Route path="/notifications" exact element={<Title>Notifications</Title>}/>
            <Route path="/route" exact element={<Title>Route</Title>}/>
      </Routes>
      {sideBar && <SideBar active={setSideBar} menuList={menuList} />}
    </Container>
  )
}
