import React from 'react'
function addContact() {
document.getElementById("list").innerHTML +=
            "<span>Name - Number </span>"+
            " <button class='callbtn'>Call</button> "
            +" <button class='callbtn'>Delete contact</button>"; 
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
<p>Add contact</p>
<div><form name="frm1" method="post" onsubmit="return addContact()">
<label for="name">Contact Name:</label>
    <input type="text" name="name"></input>
    <label for="number">Contact Number:</label>
        <input type="text" name ="number"></input>
    <input type="submit" value="Submit"></input>
</form>
</div>
    </body>
    </>
  )
}

