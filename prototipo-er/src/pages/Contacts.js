import React from 'react'

function addContact() {

document.getElementById("list").innerHTML +=
            "<div class='newcontact'>"+
            "<span>Marcus Spinel - 170871049 </span>"+
            "<button class='listbtn'>Call</button>"
            +"<button class='listbtn'>Delete contact</button>"
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

export default function Contacts() {
  return (
    <>
    <body>
        <h1>Priority Contacts</h1>
<div id="list">
        <div id="1" class='listitem'>
            <span>Albert Jhonson - 170393654  </span>
            <button class='listbtn'>Call</button>
            <button class='listbtn' onClick={rem1}>Delete contact</button>
        </div>
        <div id="2" class='listitem'>
            <span>Mike Andreson - 170675938  </span>
            <button class='listbtn'>Call</button>
            <button class='listbtn' onClick={rem2}>Delete contact</button>
        </div>
        <div id="3" class='listitem'>
            <span>Anabella Rick - 170639562  </span>
            <button class='listbtn'>Call</button>
            <button class='listbtn' onClick={rem3}>Delete contact</button>
        </div>
        <div id="4" class='listitem'>
            <span>Emily Alberta - 170867394  </span>
            <button class='listbtn'>Call</button>
            <button class='listbtn' onClick={rem4}>Delete contact</button>
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
/*<h1>Playlist</h1>
<div id="playlist">
        <div id="1" class='playlisti'>
            <span> Song 1 </span>
            <button class='playbtn'>Play file</button>
            <button class='rembtn' onClick={remfile1}>Remove file</button>
        </div>
        <div id="2" class='playlisti'>
            <span> Song 2 </span>
            <button class='playbtn'>Play file</button>
            <button class='rembtn' onClick={remfile2}>Remove file</button>
        </div>
        <div id="3" class='playlisti'>
            <span> Song 3 </span>
            <button class='playbtn'>Play file</button>
            <button class='rembtn' onClick={remfile3}>Remove file</button>
        </div>
        <div id="4" class='playlisti'>
            <span> Song 4 </span>
            <button class='playbtn'>Play file</button>
            <button class='rembtn' onClick={remfile4}>Remove file</button>
        </div>
</div>*/
