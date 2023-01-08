import React, { useRef, useEffect, useState } from 'react'
import { Container, Box, SubTitle, SwitchText } from './styles'

export default function Customizations({ active }) {
  const temperature = useRef();

  const [temp, setTemp] = useState(38);

  function handleChange() {
    setTemp(temperature.current.value);
  }

  function addSong() {
    document.getElementById("list").innerHTML +=
                "<div class='listitem'>"+
                "<span> Saved song 4 </span>"+
                "<button class='listbtn'>Play file</button>"
                +"<button class='listbtn'>Remove file</button>"
                +"</div>";
    }

  function rem1() {
    let element = document.getElementById("1");
element.remove();
}

function rem2() {
    let element = document.getElementById("2");
element.remove();
}
function rem3() {
    let element = document.getElementById("3");
element.remove();
}
function rem4() {
    let element = document.getElementById("4");
element.remove();
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

      <h1>Playlist</h1>
<div id="list">
        <div id="1" class='listitem'>
            <span> Song 1 </span>
            <button class='listbtn'>Play file</button>
            <button class='listbtn' onClick={rem1}>Remove file</button>
        </div>
        <div id="2" class='listitem'>
            <span> Song 2 </span>
            <button class='listbtn'>Play file</button>
            <button class='listbtn' onClick={rem2}>Remove file</button>
        </div>
        <div id="3" class='listitem'>
            <span> Song 3 </span>
            <button class='listbtn'>Play file</button>
            <button class='listbtn' onClick={rem3}>Remove file</button>
        </div>
        <div id="4" class='listitem'>
            <span> Song 4 </span>
            <button class='listbtn'>Play file</button>
            <button class='listbtn' onClick={rem4}>Remove file</button>
        </div>
</div>
<h2>Add media</h2>
<p>Saved song 1</p>
<p>Saved song 2</p>
<p>Saved song 3</p>
<p>-Saved song 4-(selected)</p>
<p>Saved song 5</p>
<button onClick={addSong}>Add Song</button>
    </>
  )
}
