import React from 'react'

let options = document.querySelectorAll('.griditem');

let i;
function unselectAll() {
    for (i = 0; i < options.length; i++) {
        options[i].style.backgroundColor = "";
    }
}

function show() {
  document.getElementById("marker").classList.toggle("show");
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
  <div id="day1" class="griditem">1</div>
  <div id="day2" class="griditem">2</div>
  <div id="day3" class="griditem">3</div>  
  <div id="day4" class="griditem">4</div>
  <div id="day5" class="griditem">5</div>
  <div id="day6" class="griditem">6</div>  
  <div id="day7" class="griditem">7</div>
  <div id="day8" class="griditem">8</div>
  <div id="day9" class="griditem">9</div>  
  <div id="day10" class="griditem">10</div> 
  <div id="day11" class="griditem">11</div>   
  <div id="day12" class="griditem">12</div> 
  <div id="day13" class="griditem">13</div> 
  <div id="day14" class="griditem">14</div> 
  <div id="day15" class="griditem">15</div> 
  <div id="day16" class="griditem">16</div> 
  <div id="day17" class="griditem">17</div> 
  <div id="day18" class="griditem">18</div> 
  <div id="day19" class="griditem">19</div> 
  <div id="day20" class="griditem">20</div> 
  <div id="day21" class="griditem">21</div> 
  <div id="day22" class="griditem">22</div> 
  <div id="day23" class="griditem">23</div> 
  <div id="day24" class="griditem">24</div> 
  <div id="day25" class="griditem">25</div> 
  <div id="day26" class="griditem">26</div> 
  <div id="day27" class="griditem">27</div> 
  <div id="day28" class="griditem">28</div> 
  <div id="day29" class="griditem">29</div> 
  <div id="day30" class="griditem">30</div> 
</div>
    </>
  )
}
