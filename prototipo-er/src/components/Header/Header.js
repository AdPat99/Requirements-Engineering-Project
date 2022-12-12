import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import SideBar from '../SideBar/SideBar'

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
      {sideBar && <SideBar active={setSideBar} menuList={menuList} />}
    </Container>
  )
}
