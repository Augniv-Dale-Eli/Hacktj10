function addEvent() {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const event = document.getElementById("event").value;
  
    const eventString = `${date} ${time}: ${event}`;
  
    const eventElement = document.createElement("div");
    eventElement.className = "event";
    
    const eventInfoElement = document.createElement("div");
    eventInfoElement.className = "event-info";
    const eventDateElement = document.createElement("span");
    eventDateElement.className = "event-date";
    eventDateElement.textContent = date;
    const eventTimeElement = document.createElement("span");
    eventTimeElement.className = "event-time";
    eventTimeElement.textContent = time;
    const eventTextElement = document.createElement("span");
    eventTextElement.textContent = ` - ${event}`;
    eventInfoElement.appendChild(eventDateElement);
    eventInfoElement.appendChild(eventTimeElement);
    eventInfoElement.appendChild(eventTextElement);
  
    const deleteButtonElement = document.createElement("button");
    deleteButtonElement.className = "delete-button";
    deleteButtonElement.textContent = "Delete";
    deleteButtonElement.addEventListener("click", function() {
      eventElement.remove();
    });
  
    eventElement.appendChild(eventInfoElement);
    eventElement.appendChild(deleteButtonElement);
  
    const events = document.getElementById("events");
    events.appendChild(eventElement);
  }
  