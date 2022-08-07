// sets the variable for the current time

var time = moment().format("dddd, MMMM Do YYYY")
 $("#currentDay").text(time);

//  vars for 9am 
 var nine_amBtn = document.getElementById('nine_am btn');

var nine_amInput = document.getElementById('nine_amFormText'); 

// vars for 10 am

var ten_amBtn = document.getElementById('ten_am btn');

var ten_amInput = document.getElementById('ten_amFormText'); 


// vars for 11 am

var eleven_amBtn = document.getElementById('eleven_am btn');

var eleven_amInput = document.getElementById('eleven_amFormText'); 

// vars for 12pm

var twelve_pmBtn = document.getElementById('twelve_pm btn');

var twelve_pmInput = document.getElementById('twelve_pmFormText'); 

// vars for 1pm

var one_pmBtn = document.getElementById('one_pm btn');

var one_pmInput = document.getElementById('one_pmFormText'); 

// vars for 2pm

var two_pmBtn = document.getElementById('two_pm btn');

var two_pmInput = document.getElementById('two_pmFormText'); 

// vars for 3pm

var three_pmBtn = document.getElementById('three_pm btn');

var three_pmInput = document.getElementById('three_pmFormText'); 

// vars for 4pm

var four_pmBtn = document.getElementById('four_pm btn');

var four_pmInput = document.getElementById('four_pmFormText'); 

// vars for 5pm

var five_pmBtn = document.getElementById('five_pm btn');

var five_pmInput = document.getElementById('five_pmFormText'); 

// selects momentTime class

var momentTime = document.querySelectorAll(".momentTime");



// Check local storage on page load and display existing events

getLocal9();
getLocal10();
getLocal11();
getLocal12();
getLocal1();
getLocal2();
getLocal3();
getLocal4();
getLocal5();

// functions to set and get events from local storage on load for each time block
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
   
   $('.nine_am #nine_amFormText').val(JSON.parse(localStorage.getItem('9amevent')));



    return
}
    
function setLocal10 (event) {
    event.preventDefault();
 
    var ten_amEvent
    
    ten_amEvent = ten_amInput.value;
    console.log(ten_amEvent);

    localStorage.setItem("10amevent", JSON.stringify(ten_amEvent))

    var getten_amEvent = localStorage.getItem("10amevent");

    ten_amInput.textContent = getten_amEvent;

      
}

ten_amBtn.addEventListener("click",setLocal10);


function getLocal10 () {
   
   $('.ten_am #ten_amFormText').val(JSON.parse(localStorage.getItem('10amevent')));



    return
}

function setLocal11 (event) {
    event.preventDefault();
 
    var eleven_amEvent
    
    eleven_amEvent = eleven_amInput.value;
    console.log(eleven_amEvent);

    localStorage.setItem("11amevent", JSON.stringify(eleven_amEvent))

    var geteleven_amEvent = localStorage.getItem("11amevent");

    eleven_amInput.textContent = geteleven_amEvent;

      
}

eleven_amBtn.addEventListener("click",setLocal11);


function getLocal11 () {
   
   $('.eleven_am #eleven_amFormText').val(JSON.parse(localStorage.getItem('11amevent')));



    return
}

function setLocal12 (event) {
    event.preventDefault();
 
    var twelve_pmEvent
    
    twelve_pmEvent = twelve_pmInput.value;
    console.log(twelve_pmEvent);

    localStorage.setItem("12pmevent", JSON.stringify(twelve_pmEvent))

    var gettwelve_pmEvent = localStorage.getItem("12pmevent");

    twelve_pmInput.textContent = gettwelve_pmEvent;

      
}

twelve_pmBtn.addEventListener("click",setLocal12);


function getLocal12 () {
   
   $('.twelve_pm #twelve_pmFormText').val(JSON.parse(localStorage.getItem('12pmevent')));



    return
}

function setLocal1 (event) {
    event.preventDefault();
 
    var one_pmEvent
    
    one_pmEvent = one_pmInput.value;
    console.log(one_pmEvent);

    localStorage.setItem("1pmevent", JSON.stringify(one_pmEvent))

    var getone_pmEvent = localStorage.getItem("1pmevent");

    one_pmInput.textContent = getone_pmEvent;

      
}

one_pmBtn.addEventListener("click",setLocal1);


function getLocal1 () {
   
   $('.one_pm #one_pmFormText').val(JSON.parse(localStorage.getItem('1pmevent')));



    return
}

function setLocal2 (event) {
    event.preventDefault();
 
    var two_pmEvent
    
    two_pmEvent = two_pmInput.value;
    console.log(two_pmEvent);

    localStorage.setItem("2pmevent", JSON.stringify(two_pmEvent))

    var gettwo_pmEvent = localStorage.getItem("2pmevent");

    two_pmInput.textContent = gettwo_pmEvent;

      
}

two_pmBtn.addEventListener("click",setLocal2);


function getLocal2 () {
   
   $('.two_pm #two_pmFormText').val(JSON.parse(localStorage.getItem('2pmevent')));



    return
}

function setLocal3 (event) {
    event.preventDefault();
 
    var three_pmEvent
    
    three_pmEvent = three_pmInput.value;
    console.log(three_pmEvent);

    localStorage.setItem("3pmevent", JSON.stringify(three_pmEvent))

    var getthree_pmEvent = localStorage.getItem("3pmevent");

    three_pmInput.textContent = getthree_pmEvent;

      
}

three_pmBtn.addEventListener("click",setLocal3);


function getLocal3 () {
   
   $('.three_pm #three_pmFormText').val(JSON.parse(localStorage.getItem('3pmevent')));



    return
}

function setLocal4 (event) {
    event.preventDefault();
 
    var four_pmEvent
    
    four_pmEvent = four_pmInput.value;
    console.log(four_pmEvent);

    localStorage.setItem("4pmevent", JSON.stringify(four_pmEvent))

    var getfour_pmEvent = localStorage.getItem("4pmevent");

    four_pmInput.textContent = getfour_pmEvent;

      
}

four_pmBtn.addEventListener("click",setLocal4);


function getLocal4 () {
   
   $('.four_pm #four_pmFormText').val(JSON.parse(localStorage.getItem('4pmevent')));



    return
}

function setLocal5 (event) {
    event.preventDefault();
 
    var five_pmEvent
    
    five_pmEvent = five_pmInput.value;
    console.log(five_pmEvent);

    localStorage.setItem("5pmevent", JSON.stringify(five_pmEvent))

    var getfive_pmEvent = localStorage.getItem("5pmevent");

    five_pmInput.textContent = getfive_pmEvent;

      
}

five_pmBtn.addEventListener("click",setLocal5);


function getLocal5 () {
   
   $('.five_pm #five_pmFormText').val(JSON.parse(localStorage.getItem('5pmevent')));



    return
}

// end functions to set and get events from local storage


// function to change color depending on past present or future
function colorTime (){
    var currentTime = parseInt(moment().format('H'));
    
    momentTime.forEach(function (nowTime){
        console.log(nowTime.innerHTML)
        var timeBlock = parseInt(nowTime.innerHTML);
        console.log(typeof currentTime,typeof timeBlock)
    var siblingTime = nowTime.nextElementSibling;
    console.log(nowTime.nextElementSibling);
    if (currentTime > timeBlock) {
    siblingTime.classList.add("past");
  
        
    } else if (currentTime == timeBlock) {
    siblingTime.classList.add("present");
        
    } else {
        siblingTime.classList.add("future");

    }
})
}

colorTime();



// next session, work with tutor to find a simpler way to do all of this