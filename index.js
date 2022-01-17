const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const secondAngle = (now.getSeconds() / 60) * 360 + 90;
  const minAngle = (now.getMinutes() / 60) * 360 + 90;
  const hourAngle = (now.getHours() / 24) * 360 + 90;
  console.log(now.getSeconds());
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
  minHand.style.transform = `rotate(${minAngle}deg)`;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
}

setInterval(setDate, 1000);
