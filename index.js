const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const secondAngle = (now.getSeconds() / 60) * 360 + 90;
  const minAngle = (now.getMinutes() / 60) * 360 + 90;
  const hourAngle = (now.getHours() / 24) * 360 + 90;
  console.log(now.getSeconds());
  if (now.getSeconds() == 1) {
    secondHand.style.transition = '0.3s';
  }
  if (now.getSeconds() == 0) {
    secondHand.style.transition = 'none';
  }
  if (now.getMinutes() == 1) {
    minHand.style.transition = '0.3s';
  }
  if (now.getMinutes() == 0) {
    minHand.style.transition = 'none';
  }
  if (now.getHours() == 1) {
    hourHand.style.transition = '0.3s';
  }
  if (now.getHours() == 0) {
    hourHand.style.transition = 'none';
  }
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
  minHand.style.transform = `rotate(${minAngle}deg)`;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
}

setInterval(setDate, 1000);
