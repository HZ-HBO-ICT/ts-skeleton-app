import HelloWorld from './HelloWorld.js';

const greeting = new HelloWorld();
console.log(greeting.greet());
window.addEventListener('load', () => {
  document.getElementById('content').innerText = greeting.greet();
});
