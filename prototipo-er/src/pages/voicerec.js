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
        <p>Please note, this function is not complete, the user may enter locations and the map can be interacted with,
          but the fields are there for demonstration puroses only</p>
      </div>
    </>
  )
}
