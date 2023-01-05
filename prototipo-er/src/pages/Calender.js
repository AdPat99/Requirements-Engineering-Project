import React from 'react'

let options = document.querySelectorAll('.griditem');

let i;
function unselectAll() {
    for (i = 0; i < options.length; i++) {
        options[i].style.backgroundColor = "";
    }
}

// loop through the options and add the event listener to each element
options.forEach(griditem => {
  griditem.addEventListener('click', function(){
      unselectAll();
      this.style.backgroundColor = "#333";  
   } );
});

export default function Calender() {
  return (
    
    <>
      <h1>Calendar</h1>

      <button class="arrowbut">Previous</button>
      <button class="arrowbut">Next</button>
      
      <h2>Setembro</h2>
      <div class="grid-container">
      <button class="btn" onclick="btnColor()">1</button>
  <div class="griditem">2</div>
  <div class="griditem">3</div>  
  <div class="griditem">4</div>
  <div class="griditem">5</div>
  <div class="griditem">6</div>  
  <div class="griditem">7</div>
  <div class="griditem">8</div>
  <div class="griditem">9</div>  
  <div class="griditem">10</div> 
  <div class="griditem">11</div>   
  <div class="griditem">12</div> 
  <div class="griditem">13</div> 
  <div class="griditem">14</div> 
  <div class="griditem">15</div> 
  <div class="griditem">16</div> 
  <div class="griditem">17</div> 
  <div class="griditem">18</div> 
  <div class="griditem">19</div> 
  <div class="griditem">20</div> 
  <div class="griditem">21</div> 
  <div class="griditem">22</div> 
  <div class="griditem">23</div> 
  <div class="griditem">24</div> 
  <div class="griditem">25</div> 
  <div class="griditem">26</div> 
  <div class="griditem">27</div> 
  <div class="griditem">28</div> 
  <div class="griditem">29</div> 
  <div class="griditem">30</div> 
</div>
    </>
  )
}
