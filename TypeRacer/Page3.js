const backgroundSound = new Audio("./soundbgm.mp3");
backgroundSound.play()
backgroundSound.loop = true;
backgroundSound.volume = 0.2


const nextButton = document.getElementById("nextButton");
const clickSound = new Audio("./button.mp3"); 