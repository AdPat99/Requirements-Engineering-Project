import React from 'react'

function addContact() {
    
let n= document.getElementById("num");
document.getElementById("list").innerHTML +=
            "<div class='contact list'>"+
            "<span>Marcus Spinel - 170871049</span>"+
            " <button class='callbtn'>Call</button> "
            +" <button class='callbtn'>Delete contact</button>"
            +"</div>";
}
function remContact() {
    let element = document.getElementById();
element.remove();
}

export default function Contacts() {
  return (
    <>
    <body>
        <h1>Priority Contacts</h1>
<div id="list">
        <div class='contact list'>
            <span>Albert Jhonson - 170393654  </span>
            <button class='callbtn'>Call</button>
            <button id="contact1" class='callbtn' onClick={remContact}>Delete contact</button>
        </div>
        <div class='contact list'>
            <span>Mike Andreson - 170675938  </span>
            <button class='callbtn'>Call</button>
            <button class='callbtn'>Delete contact</button>
        </div>
        <div class='contact list'>
            <span>Anabella Rick - 170639562  </span>
            <button class='callbtn'>Call</button>
            <button class='callbtn'>Delete contact</button>
        </div>
        <div class='contact list'>
            <span>Emily Alberta - 170867394  </span>
            <button class='callbtn'>Call</button>
            <button class='callbtn'>Delete contact</button>
        </div>
</div>
<h2>New contact</h2>
<p>Name: Marcus Spinel</p>
<p>Number: 170871049</p>
<button onClick={addContact}>Add contact</button>
    </body>
    </>
  )
}

