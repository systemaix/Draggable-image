const img = document.getElementById('draggable');

let isDragging = false;
let posX = window.innerWidth / 2 - img.offsetWidth / 2;
let posY = 140;
let offsetX = 0;
let offsetY = 0;

// Initialize position
img.style.left = posX + 'px';
img.style.top = posY + 'px';
img.style.transform = 'none';

// Click to toggle drag
img.addEventListener('click', (e) => {
  isDragging = !isDragging;

  if (isDragging) {
    img.classList.add('dragging');
    offsetX = e.clientX - posX;
    offsetY = e.clientY - posY;
  } else {
    img.classList.remove('dragging');
  }
});

// Move while dragging
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  posX = e.clientX - offsetX;
  posY = e.clientY - offsetY;

  requestAnimationFrame(() => {
    img.style.left = posX + 'px';
    img.style.top = posY + 'px';
  });
});
