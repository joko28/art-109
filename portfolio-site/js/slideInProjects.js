//ensure that our js runs only after the HTML content is loaded.
document.addEventListener("DOMContentLoaded", function () {
    //Grab all the elements with class project-item
    const projectItems = document.querySelectorAll(".project-item");

    function checkSlide() {
        //Loop through the porjectItems
        projectItems.forEach(projectItem) => {
            // Calculate the point where the top of the element is halfway into the viewpoint
            const SlideInAt = window.scrollY + window.innerHeight - porjectItem.colientHeight/2;
            // Calculate the bottom of the porject-item element
            const itemBottom = projectItem.offsetTop + projectItem.clientHeight;

            // Check if the element is halfway show or scrollpast
            const isHalfShown = slideInAt > projectItem.offsetTop;
            const isNotScrolledPast = window.scrollY < itemBottom;

            // if conditions are met, we add slide-in class else we remove it.
            is (isHalfShown && isNotScrolledPast) {
                projectItem.classList.add("slide-in");
            } else {
                projectItem.classList.remove("slide-in")
            }
        }
    }

    window.addEventListener("scroll", checkSlide);
    window.addEventListener("resize", checkSlide);

    checkSlide();
})