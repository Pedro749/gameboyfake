const buttonLeft = document.querySelector('.dpad__left');
const buttonUp = document.querySelector('.dpad__up');
const buttonRight = document.querySelector('.dpad__right');
const buttonDown = document.querySelector('.dpad__down');
const buttonSelect = document.querySelector('.commands__select');
const buttonStart = document.querySelector('.commands__start');
const buttonA = document.querySelector('.buttons__buttonA');
const buttonB = document.querySelector('.buttons__buttonB');

const data = {
  src: "https://toy.aoaoao.me/image",
  alt: 'Image game',
  class: 'display__image',
  parent: '.display'
};

const display_image = (data) => {
  const parent = document.querySelector(data.parent);
  parent.innerHTML = null;

  const imageElement = document.createElement("img");
  imageElement.src = data.src+"?"+Math.random(1);
  imageElement.alt = data.alt;
  imageElement.className = data.class;
  
  parent.appendChild(imageElement);
};

const buttonsFetch = (button) => {
  const buttonsAllowed = ["0", "1", "2", "3", "4", "5", "6", "7"];

  if (buttonsAllowed.includes(button)) {

    const URL = "https://toy.aoaoao.me/control";
    fetch(URL+'?button='+button+'&callback=https://github.com/pedro749', {
      method: "GET",
      mode: 'no-cors'
    });

    display_image({
      src: "https://toy.aoaoao.me/image",
      alt: 'Image game',
      class: 'display__image',
      parent: '.display'
    });
}
};

display_image(data);

buttonLeft.addEventListener('click', () => buttonsFetch("1"));
buttonUp.addEventListener('click', () => buttonsFetch("2"));
buttonRight.addEventListener('click', () => buttonsFetch("0"));
buttonDown.addEventListener('click', () => buttonsFetch("3"));
buttonSelect.addEventListener('click', () => buttonsFetch("6"));
buttonStart.addEventListener('click', () => buttonsFetch("7"));
buttonA.addEventListener('click', () => buttonsFetch("4"));
buttonB.addEventListener('click', () => buttonsFetch("5"));
