document.addEventListener("DOMContentLoaded", function () {
  // Grab all the elements with class project-item
  const projectItems = document.querySelectorAll(".project-item");

  function checkSlide() {
    // Loop through the projectItems
    projectItems.forEach((projectItem) => {
      // Calculate the point where the top of the element is halfway into the viewpoint
      const slideInAt =
        window.scrollY + window.innerHeight - projectItem.clientHeight / 2;

      // Calculate the bottom of the project-item element
      const itemBottom = projectItem.offsetTop + projectItem.clientHeight;

      // Check if the element is halfway shown or scrolled past
      const isHalfShown = slideInAt > projectItem.offsetTop;
      const isNotScrolledPast = window.scrollY < itemBottom;

      // If conditions are met, we add slide-in class, else we remove it.
      if (isHalfShown && isNotScrolledPast) {
        projectItem.classList.add("slide-in");
      } else {
        projectItem.classList.remove("slide-in");
      }
    });
  }

  window.addEventListener("scroll", checkSlide);
  window.addEventListener("resize", checkSlide);

  // Initial check
  checkSlide();
});
