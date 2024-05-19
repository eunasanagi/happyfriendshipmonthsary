document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".show-all-btn");
    const letterContent = document.querySelector(".letter-content");

    button.addEventListener("click", function() {
        letterContent.classList.add("visible");
        button.style.display = "none"; 
    });
});
