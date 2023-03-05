var startTimes = [];
var endTimes = [];
var dates = [];
var eventNames = [];
var descriptions = [];
var currIndex = 0;
function addEvent() {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const endTime = document.getElementById("time2").value;
    const event = document.getElementById("event").value;
    const desc = document.getElementById("desc").value;
    if(date!=''&&time!=''&&endTime!=''&&event!=''&&desc!=''){
      dates.push(date);
      startTimes.push(time);
      endTimes.push(endTime);
      eventNames.push(event);
      descriptions.push(desc);
      console.log(startTimes[currIndex]);
      console.log(endTimes[currIndex]);
      console.log(dates[currIndex]);
      console.log(eventNames[currIndex]);
      console.log(descriptions[currIndex]);
      currIndex++;
    }
  }
  function getInfoBrief(index){
    return "From " + startTimes[index] + " to " + endTimes[index] + ", " + eventNames[index];
  }

  function showRectangle() {
    var rectangle = document.querySelector(".dropBox");
    var rectangle2 = document.querySelector(".dropDown");
    rectangle.style.display = "block";
    rectangle2.style.display="block"
  }
  
  function hideRectangle() {
    var rectangle = document.querySelector(".dropBox");
    var rectangle2 = document.querySelector(".dropDown");
    rectangle.style.display = "none";
    rectangle2.style.display="none"
  }
