    var time = moment().format("dddd, MMMM Do YYYY")
    $("#currentDay").text(time);

    var nine_amBtn = document.getElementById('nine_am btn');

var nine_amInput = document.getElementById('nine_amFormText'); 

// Check local storage on page load and display existing events

getLocal9();

// issue calendar not keeping events on reload from local storage, goal, load something from local storage on page load


function setLocal9 (event) {
    event.preventDefault();
 
    var nine_amEvent
    
        nine_amEvent = nine_amInput.value;
    console.log(nine_amEvent);

    localStorage.setItem("9amevent", JSON.stringify(nine_amEvent))

    var getnine_amEvent = localStorage.getItem("9amevent");

    nine_amInput.textContent = getnine_amEvent;

      
}

nine_amBtn.addEventListener("click",setLocal9);


function getLocal9 () {
   
    var getnine_amEvent = localStorage.getItem("9amevent");
  
   nine_amInput.textContent = getnine_amEvent;
    return
}
    

// for loop to check if current moment is between 9 and 5 and if yes, find the appropriate box and turn that box the right background color


// if current time is past use past class, future, 

// for loop to create button elements

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// use moment.js and use javascript to add events to the planer and to local storage
// try using a for loop to check to see if the current hour is the hour when someone is looking at the calendar, if yes, turn that hour red, if the hour has passed turn the row grey, if the hour hasn't passed turn the row green (change background color)
// use moment.js and use localstorage

// use the save button on each line of the table to add an event listener to write that event to local storage and then display it


// See this for bootstrap table setup from this site: https://getbootstrap.com/docs/4.0/content/tables/

// <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>

// // <script type="text/javascript">
// document.getElementById("txt_1").value = getSavedValue("txt_1");    // set the value to this input
// document.getElementById("txt_2").value = getSavedValue("txt_2");   // set the value to this input
// /* Here you can add more inputs to set value. if it's saved */

// //Save the value function - save it to localStorage as (ID, VALUE)
// function saveValue(e){
//     var id = e.id;  // get the sender's id to save it . 
//     var val = e.value; // get the value. 
//     localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
// }

// //get the saved value function - return the value of "v" from localStorage. 
// function getSavedValue  (v){
//     if (!localStorage.getItem(v)) {
//         return "";// You can change this to your defualt value. 
//     }
//     return localStorage.getItem(v);
// }
// </script>