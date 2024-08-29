export default function btnColor() {
  let bg = document.querySelector('#btn-color');
  bg.addEventListener('click', () => {
    let color = document.body.style.backgroundColor;
    console.log(color);
    if (color == 'green') {
      console.log(color);
      document.body.style.backgroundColor = 'blue';
    } else {
      document.body.style.backgroundColor = 'green';
    }
  });
}
