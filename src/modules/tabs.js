function listner(text) {
  const btn = document.createElement('btn');
  const body = document.querySelector('body');
  btn.className = 'btn';
  btn.textContent = text;

  body.append(btn);
}

export default listner;
