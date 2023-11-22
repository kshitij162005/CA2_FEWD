const backgroundSound = new Audio("./soundbgm2.mp3");
backgroundSound.play()
backgroundSound.loop = true;


// const nextButton = document.getElementById("nextButton");
// const clickSound = new Audio("./button.mp3"); 


document.addEventListener("DOMContentLoaded", function () {
    const instructionsBox = document.getElementById("instrutionbox");
    const aboutBox = document.getElementById("aboutbox");
    const instructionsContent = document.querySelector(".instructions");
    const aboutContent = document.querySelector(".about");


    instructionsContent.style.display = "none";
    aboutContent.style.display = "none";

    instructionsBox.addEventListener("click", function () {
        instructionsContent.style.display = instructionsContent.style.display === "none" ? "block" : "none";
        aboutContent.style.display = "none"; 
    });

    

    aboutBox.addEventListener("click", function () {
        aboutContent.style.display = aboutContent.style.display === "none" ? "block" : "none";
        instructionsContent.style.display = "none"; 
    });
});








