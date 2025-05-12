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


function addSkillCard(id, data) {
    const container = document.getElementById(id);
    
    data.forEach(skill => {
        const card = document.createElement("div");
        card.className = "skill-card";
        const img = document.createElement("img");
        img.src = skill.icon;
        img.alt = skill.name;
        img.className = "skill-icon";
        const text = document.createElement("p");
        text.textContent = skill.name;
        card.appendChild(img);
        card.appendChild(text);
        container.appendChild(card);
    });
}
  
  // Add Front-End data
  const frontEnd = [{
    name: "HTML",
    icon: "assets/icons/html.png"
  },
  {
    name: "CSS",
    icon: "assets/icons/css.png"
  },
  {
    name: "Bootstrap",
    icon: "assets/icons/bootstrap.png"
  },
  {
    name: "JavaScript",
    icon: "assets/icons/javascript.png"
  },
  {
    name: "jQuery",
    icon: "assets/icons/jquery.png"
  },
  {
    name: "React",
    icon: "assets/icons/react.png"
  }
];
addSkillCard("rkyFrontEnd", frontEnd);