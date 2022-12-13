import React, { useRef, useEffect, useState } from 'react'
import { Container, Box, SubTitle, SwitchText } from './styles'

export default function Customizations({ active }) {
  const temperature = useRef();

  const [temp, setTemp] = useState(38);

  function handleChange() {
    setTemp(temperature.current.value);
  }

  return (
    <>
      <h1>Customizations</h1>
        <button>Playlist</button>
        <button>AC temperature</button>
    </>
  )
}
