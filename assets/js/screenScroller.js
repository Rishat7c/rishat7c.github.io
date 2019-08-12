/* 
 * need .section root-selectors for correct work
 */

const Ready = () => {
  InjectStyles();
  ActionListeners();
}

const ScrollActive = (function () {
  let counter = 0;
  return function (action, callback) {
    return callback(action === 'down' ? counter += -100 : counter += 100)
  }
})();

const ActionListeners = () => {
  const Body = document.querySelector('body');
  const SkillsContainerScroll = document.getElementById('skills-left');
  const Callback = value => {
    Body.style.transform = `translateY(${value}vh)`
  }
  let transitionEnd = true;

  [...document.querySelectorAll('body > .section')].forEach((item, index, array) => {
    item.onwheel = (e) => {
      if (transitionEnd) {
        if ((SkillsContainerScroll.scrollHeight === SkillsContainerScroll.offsetHeight) ||
          !e.path.map(item => item.id).some((item) => item === 'skills-left')) {
          transitionEnd = false;
          e.deltaY === 100 ? (
            index !== array.length - 1 && ScrollActive('down', Callback)
          ) : (
            index !== 0 && ScrollActive('up', Callback)
          )
        }
      }
      console.log(e.path.map(item => item.id).some((item) => item === 'skills-left'))
    }
  })

  Body.addEventListener('transitionend', () => {transitionEnd = true; console.log(transitionEnd)});
}

const InjectStyles = () => {
  const CurrentStyles = `
  <style>
  body {
    overflow: hidden;
    transition: 0.7s ease-in-out;
    transform: translateY(0);
  }

  .section {
    height: 100vh;
  }
  </style>
  `
  document.querySelector('head').insertAdjacentHTML('beforeend', CurrentStyles)
}

document.addEventListener('DOMContentLoaded', Ready);