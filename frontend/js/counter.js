function actualizarContador() {
    const goalDate = new Date("2023-11-02 20:00:00").getTime(); 

    const now = new Date().getTime();
    const difference = goalDate - now;

    if (difference <= 0) {
        document.getElementById("counter").innerHTML = "Your offer has ended!";
    } else {
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        if (days >= 0 && days < 10){
            days = '0' + days
        } 
        if (hours >= 0 && hours < 10){
            hours = '0' + hours
        } 
        if (minutes >= 0 && minutes < 10){
            minutes = '0' + minutes
        } 
        if (seconds >= 0 && seconds < 10){
            seconds = '0' + seconds
        } 
        
       
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours ;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        

    }
}

setInterval(actualizarContador, 1000);