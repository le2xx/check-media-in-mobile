import './styles/base.styl';
// import { testBlock } from './app/components/test-block/test-block';

window.onload = () => {
  const body = document.querySelector('body');
  const screenTemplate = body.querySelector('.screen-info');


  const addElement = (key, value) => {
    const node = document.createElement('span');
    node.innerHTML = `<span class="screen-key">${key}: </span><span class="screen-value">${value}</span><br>`;
    return node;
  };

  const addScreenOptions = () => {
    for (const key in window.screen) {
      if (key === 'orientation') {
        screenTemplate.appendChild(addElement(key, window.screen[key].type));
        return;
      }
      screenTemplate.appendChild(addElement(key, window.screen[key]));
    }
  };

  addScreenOptions();

  window.addEventListener('resize', () => {
    screenTemplate.innerHTML = '';
    addScreenOptions();
  });
};
