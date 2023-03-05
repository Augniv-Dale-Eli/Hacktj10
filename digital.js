setInterval(() => {
    const date = new Date();
    const hours = Math.abs(date.getHours() - 12);
    const minutes = date.getMinutes();
    var time = 0;
    if(minutes<10){
        time = `${hours}:0${minutes}`;
    }
    else{
        time = `${hours}:${minutes}`;
    }
    document.getElementById("clock").innerHTML = time;
    
  }, 1000);