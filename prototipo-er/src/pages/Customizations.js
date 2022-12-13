import React,{useRef,useEffect,useState} from 'react'
import { Container, Box, SubTitle, SwitchText } from './styles'

export default function Customizations({ active }) {
  const temperature = useRef();

  const [temp, setTemp] = useState(38);

  function handleChange() {
    setTemp(temperature.current.value);
  }

  return (
    <>
      <Container active={active}>
        <Box>
          <SubTitle>Custom temperature</SubTitle>
          <SwitchText>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            AC
          </SwitchText>
          <SwitchText>
            <label>
            <input ref={temperature} onChange={handleChange} type="range" name="myInput"  step="1" min="15" max="38" />
            </label>{temp}º

          </SwitchText>
        </Box>
      </Container>
    </>
  )
}
