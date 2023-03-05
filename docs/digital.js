setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    var time = 0;
    if(hours>12){
        hours-=12;
    }
    if(minutes<10){
        time = `${hours}:0${minutes}`;
    }
    else{
        time = `${hours}:${minutes}`;
    }
    document.getElementById("clock").innerHTML = time;
    
  }, 1000);


