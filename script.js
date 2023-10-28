document.addEventListener("DOMContentLoaded", function() {
    const myDiv = document.getElementById("myDiv");

    const glowOnHoverButton = document.querySelector(".glow_on_hover");

    glowOnHoverButton.addEventListener("click", function() {

        myDiv.style.transition = "opacity 0.7s";

        myDiv.style.opacity = 0;
    });
});
