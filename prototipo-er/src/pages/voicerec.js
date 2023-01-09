import React from 'react'
import { Link } from "react-router-dom";

export default function Voicerec() {


  return (
    <>
      <div>
        <h1>Voice Recognition</h1>
        <ul>
          <li>
            <Link to="/voicerec">VoiceRecognition</Link>
          </li>
          <li>
            <Link to="/Route">Routing</Link>
          </li>
          <li>
            <Link to="/customizations">AC Temperature</Link>
          </li>
          <li>
            <Link to="/customizations">Music</Link>
          </li>
        </ul>

        <br></br><br></br><br></br><br></br>
        <p>The upper links above represent the functions the application would lead the user to,</p><br></br>
        <p>given the following phrases:"direct me", "set AC temperature", "Play/stop/skip song". </p><br></br>
        <p>A page for voice recognition would not exist in a release meant for a customer.</p><br></br>
        <p>This is just meant to demonstrate the functionality. </p>
      </div>
    </>
  )
}
