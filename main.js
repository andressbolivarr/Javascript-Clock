function currentClockTime(){
    let date = new Date();
    let hours = date.getHours(); 
    let minutes = date.getMinutes(); 
    let seconds = date.getSeconds(); 
    let session =  'AM'; 
       if(hours == 0){
            hh=12; 
           } 
       if(hour>12){
            hours = hours - 12;
            session ='PM'; 
           } 
           hour = (hours < 10) ? '0' + hours : hours; 
           minutes = (minutes < 10) ? '0' + minutes : minutes; 
           seconds = (seconds < 10) ? '0' + seconds : seconds; 
           let time = hours + ':' + minutes + ':' + seconds + '' + session;
           document.getElementById('clock').innerText = time; 
           let t = setTimeout(() => {
                currentClockTime()
                }, 1000); } currentClockTime();