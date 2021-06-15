// id 
const datetime = document.getElementById("datetime");

const staticHour = document.getElementsByClassName("hour")

const hour = document.querySelector('.hour').textContent

var datetimeSlice = hour.slice(-2)
// a function that updates time in real times

function updatedTime(){
const now = moment();
  const updated = now.format("MMMM Mo, h:mm:ssA");
  const comparison = now.format("h:mma");
    datetime.textContent = updated;

}
setInterval(updatedTime,1000);
//when refreshing page or opening page the fucntion calls
updatedTime();

// fucntion that color coats the schedule 
var numericHour = 0;
function checkTime(){
  var hourSplit =''
for(var i = 0; i < staticHour.length; i++){
  const now = moment();
  var colorChange = document.querySelectorAll('.description')
  hourSplit =staticHour[i].textContent
  hourSplit =hourSplit.substring(0,hourSplit.indexOf(':'))
  numericHour = parseInt(hourSplit)
  staticHour[i].textContent.slice(-2)
  if(staticHour[i].textContent.slice(-2) == "pm"){
    numericHour+= 12
if (numericHour == 24){
  numericHour = 12
}
    colorChange[i].style.backgroundColor ='green'
  }
  if(numericHour < moment().get('hour')){
 colorChange[i].style.backgroundColor ='red'
 colorChange[i].disabled = true;
  }
 else if(numericHour == moment().get('hour')){
    colorChange[i].style.backgroundColor ='blue'
 colorChange[i].disabled = true;
  }
  else{
    colorChange[i].style.backgroundColor ='green'
  }
}
}
checkTime()

function myFunction(event){
  var dTag =document.querySelector('.d' + event).value;
// console.log(dTag);
  localStorage.setItem(event,dTag); 
}

function loadEvents(){
  for(var i = 0; i < 12; i++){
 const storedInput= localStorage.getItem(i);
  var textO =document.querySelector(".d" + i)
  if(storedInput!= null){
    textO.value = storedInput
  }else{
    console.log(textO);
  }
  }
}

$(document).ready(function (){
  loadEvents();
});

