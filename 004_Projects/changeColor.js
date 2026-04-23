const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(buttons);
buttons.forEach((items) => {
  console.log(buttons);
  items.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'black';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'yellow';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'silver';
    }
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'red';
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = 'pink';
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = 'green';
    }
  });
});
// console.log(body);
