// Select the brushstroke element
const brushstroke = document.querySelector(".brushstroke");

// Listen for mouse movements
document.addEventListener("mousemove", (event) => {
  // Get mouse position
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Update the position of the brushstroke
  brushstroke.style.left = `${mouseX}px`;
  brushstroke.style.top = `${mouseY}px`;

  // Optionally adjust the size of the brushstroke based on the speed of mouse movement
  const speed = Math.min(
    Math.abs(event.movementX) + Math.abs(event.movementY),
    30
  );
  brushstroke.style.width = `${speed + 50}px`; // 50 is the base size of the brushstroke
  brushstroke.style.height = `${speed + 50}px`;
});
