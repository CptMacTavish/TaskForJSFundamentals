const allCircles = document.querySelectorAll('.circle');

allCircles.forEach(element => {
  const animValue = element.getAttribute('data-anim');
  if (animValue) {
    element.classList.add(animValue);
  }
});