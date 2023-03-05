setInterval(() => {
    const date = new Date();
    const hours = Math.abs(date.getHours() - 12);
    const minutes = date.getMinutes();
    if(minutes<10){
        const time = `${hours}:0+${minutes}`;
    }
    else{
        const time = `${hours}:${minutes}`;
    }
    document.getElementById("clock").innerHTML = time;
    
  }, 1000);