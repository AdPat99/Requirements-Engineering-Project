import React from 'react'
import { Container, Box, SubTitle, SwitchText } from './styles'

export default function Notifications({ active }) {
  return (
    <>
      <Container active={active}>
        <Box>
          <SubTitle>Receive notification when driving</SubTitle>
          <SwitchText>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            Priority contacts only
          </SwitchText>
          <SwitchText>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            All contacts
          </SwitchText>
          <SwitchText>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            Read Notifications
          </SwitchText>
        </Box>
        <Box>
          <SubTitle>Receive alerts from events</SubTitle>
          <SwitchText>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            Priority events only
          </SwitchText>
          <SwitchText>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            All events
          </SwitchText>
        </Box>
      </Container>
    </>
  )
}
