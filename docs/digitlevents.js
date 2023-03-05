var startTimes = [];
var endTimes = [];
var dates = [];
var eventNames = [];
var currIndex = 0;
function addEvent() {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const endTime = document.getElementById("time2").value;
    const event = document.getElementById("event").value;
    if(date!=''&&time!=''&&endTime!=''&&event!=''&&time<endTime&&date.length<=10){
      dates.push(date);
      startTimes.push(time);
      endTimes.push(endTime);
      eventNames.push(event);
      console.log(startTimes[currIndex]);
      console.log(endTimes[currIndex]);
      console.log(dates[currIndex]);
      console.log(eventNames[currIndex]);
      var table = document.getElementById("eventTable");
      var row = table.insertRow(table.rows.length);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = eventNames[currIndex]
      cell2.innerHTML = "From " + startTimes[currIndex] + " to " + endTimes[currIndex];;
      currIndex++;
    }
  }

  function showRectangle() {
    var rectangle = document.querySelector(".dropBox");
    var rectangle2 = document.querySelector(".dropDown");
    var rectangle3 = document.querySelector(".fixed_header");
    rectangle.style.display = "block";
    rectangle2.style.display="block"
    rectangle3.style.display="block"
  }
  
  function hideRectangle() {
    var rectangle = document.querySelector(".dropBox");
    var rectangle2 = document.querySelector(".dropDown");
    var rectangle3 = document.querySelector(".fixed_header");
    rectangle.style.display = "none";
    rectangle2.style.display="none"
    rectangle3.style.display="none"
  }
