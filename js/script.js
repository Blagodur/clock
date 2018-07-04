var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    // seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60)*360)+90;

    // mins
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60)*360)+90;
    // hour
    var hour = now.getHours();
    var hourDegrees = (((hour+((mins*60+seconds)/3600)) / 12)*360)+90;
    console.log(hour);


    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    var saveHouer = hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(saveHouer)
}
setInterval(setDate,1000);