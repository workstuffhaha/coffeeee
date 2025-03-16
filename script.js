function showGif2() {
    document.getElementById("gif1").style.display = "none"; // Hide gif1
    document.getElementById("gif2").style.display = "block"; // Show gif2Container
    document.getElementById("gif2TopTEXT").style.display="block";
    document.getElementById("gif2BottomTEXT").style.display="block";
    document.getElementById("gif3BUTTONS").style.display="none";
}

function showGif3() {
    document.getElementById("gif2").style.display = "none"; // Hide gif2
    document.getElementById("gif2TopTEXT").style.display="none";
    document.getElementById("gif2BottomTEXT").style.display="none";
    document.getElementById("gif3BUTTONS").style.display="block";
    document.getElementById("gif3").style.display="block"; // Show gif3 + question
    document.getElementById("gif3TEXT").style.display="block";
}

function showGif4() {
        document.getElementById("gif3").style.display = "none";  // Hide gif3
        document.getElementById("gif3TEXT").style.display = "none"; // Hide text
        document.getElementById("gif3BUTTONS").style.display = "none"; // Hide buttons
    
        document.getElementById("gif4").style.display = "block";
        document.getElementById("gif4TEXT").style.display="block";
}


function moveNoButton() {
    let button = document.getElementById("no-btn");
    let gif = document.getElementById("gif3");

    let gifRect = gif.getBoundingClientRect();

    let buffer = 30; // Distance range around the GIF
    let minX = gifRect.left - buffer;
    let maxX = gifRect.right + buffer - button.offsetWidth;
    let minY = gifRect.top - buffer;
    let maxY = gifRect.bottom + buffer - button.offsetHeight;

    // Ensure button stays near the GIF
    let x = Math.random() * (maxX - minX) + minX;
    let y = Math.random() * (maxY - minY) + minY;

    button.style.position = "absolute"; 
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

document.getElementById("yes-btn").addEventListener("click", () => {
    // Change the GIF
    const gif = document.getElementById("gif4");
    gif.src = "assets/airJump.gif";  // Change this to your actual file path

    // Show GIF4 & start floating hearts animation when it's loaded
    gif.onload = () => {
        for (let i = 0; i < 10; i++) {
            setTimeout(createHeart, i * 200);
        }
    };
});




function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️"; // Emoji heart or use an image
    heart.classList.add("floating-heart");

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;

    document.body.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

document.getElementById("yes-btn").addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(createHeart, i * 200);
    }
});


