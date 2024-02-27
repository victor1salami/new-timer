function countdownTimer(totalSeconds){
  //update countdown evry second
    const countdownInterval =setInterval(function(){
          var days = document.getElementById('days');
    const add = Math.floor(totalSeconds/(24 * 60 * 60));
    var hours = document.getElementById('hours');
    const sub = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    var minutes = document.getElementById('minutes');
    const div = Math.floor((totalSeconds % (60 * 60) / 60));
    var seconds = document.getElementById('seconds');
    const mul = totalSeconds % 60;
  //Displa the countdown

    days.innerHTML = add;
    hours.innerHTML = sub;
    minutes.innerHTML = div;
    seconds.innerHTML = mul;
// decrease the total seconds
    totalSeconds--;
// restart the countdown when the seconds reach zero
if(totalSeconds <0){
    clearInterval(countdownInterval);
    totalSeconds = initialTotalSeconds;

    //  restart the countdown timer
    setTimeout(countdownTimer(totalSeconds), 1000);
}
},1000)
}

// set intial toatl seconds for the countdown.
const initialTotalSeconds = 864000;
// start the countdown timer
countdownTimer(initialTotalSeconds);