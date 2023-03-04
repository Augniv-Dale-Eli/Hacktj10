setInterval(() => {
    const date = new Date();
    const hours = Math.abs(date.getHours() - 12);
    const minutes = date.getMinutes();
    const time = `${hours}:${minutes}`;
    document.getElementById("clock").innerHTML = time;
  }, 1000);