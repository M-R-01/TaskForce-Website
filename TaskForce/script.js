let scrollContainer = document.querySelector(".links");
let bckArrow = document.getElementById("back-arrow");
let nxtArrow = document.getElementById("next-arrow");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault
    scrollContainer.scrollLeft += evt.deltaY;
})

nxtArrow.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1050;
})

bckArrow.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1050;
})