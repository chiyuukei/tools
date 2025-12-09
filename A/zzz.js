const element = document.getElementById('result');
let isDragging = false;
let offsetX, offsetY;

element.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - element.getBoundingClientRect().left;
  offsetY = e.clientY - element.getBoundingClientRect().top;
  element.style.opacity = '0.8';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const x = e.clientX - offsetX;
  const y = e.clientY - offsetY;
  element.style.left = x + 'px';
  element.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  element.style.opacity = '1';
});   
