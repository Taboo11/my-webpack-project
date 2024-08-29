import './style.css';
import listner from './modules/tabs';
import './styles/body.css';
import './styles/header.css';
import './styles/btn.css';
import '../src/index.html';

document.addEventListener('DOMContentLoaded', () => {
  listner('Отправить');
});
