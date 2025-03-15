const words = ["Python", "JavaScript", "TypeScript", "Flask", "MERN Stack", "PHP", "API Development", "Database"];
let wordIndex = 0;
let charIndex = 0;
let erase = false;
let skills = document.getElementById("skills");

function typeEffect() {
    let currentWord = words[wordIndex];
    if (!erase) {
        skills.innerText = currentWord.substring(0, charIndex);
        charIndex++;
        if (charIndex > currentWord.length) {
            erase = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        skills.innerText = currentWord.substring(0, charIndex);
        charIndex--;
        if (charIndex === 0) {
            erase = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeEffect, 150);
}
document.addEventListener("DOMContentLoaded", typeEffect);

function navHover() {
    const buttons = document.querySelectorAll(".nav-link");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.color = "red";
        });
        button.addEventListener("mouseleave", () => {
            button.style.color = "whitesmoke";
        });
    });
}
document.addEventListener("DOMContentLoaded", navHover);
