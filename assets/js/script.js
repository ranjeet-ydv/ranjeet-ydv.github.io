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
  
  // Front-End Skills data
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


// Back-End Skills data
const backEnd = [{
    name: "Node.js",
    icon: "assets/icons/nodejs.png"
  },
  {
    name: "Express.js",
    icon: "assets/icons/expressjs.png"
  },
  {
    name: "Flask",
    icon: "assets/icons/flask.png"
  },
  {
    name: "PHP",
    icon: "assets/icons/php.png"
  },
  {
    name: "RESTful APIs",
    icon: "assets/icons/restapi.png"
  },
  {
    name: "FastAPI",
    icon: "assets/icons/fastapi.png"
  }
];
addSkillCard("rkyBackEnd", backEnd);

// Databases & Data Handling
const databases = [{
    name: "SQL",
    icon: "assets/icons/sql.png"
  },{
    name: "MySQL",
    icon: "assets/icons/mysql.png"
  },
  {
    name: "SQLite",
    icon: "assets/icons/sqlite.png"
  },
  {
    name: "MongoDB",
    icon: "assets/icons/mongodb.png"
  },
  {
    name: "JSON",
    icon: "assets/icons/json.png"
  },
  {
    name: "Pickle",
    icon: "assets/icons/package.png"
  }
];
addSkillCard("rkyDatabases", databases);

// Databases & Data Handling
const tools = [{
    name: "Git",
    icon: "assets/icons/git.png"
  },
  {
    name: "GitHub",
    icon: "assets/icons/github.png"
  },
  {
    name: "Postman",
    icon: "assets/icons/postman.png"
  },,
  {
    name: "Figma",
    icon: "assets/icons/figma.png"
  },
  {
    name: "FileZilla",
    icon: "assets/icons/filezilla.png"
  },
  {
    name: "Bitvise",
    icon: "assets/icons/bitvise.png"
  },
  {
    name: "PortX",
    icon: "assets/icons/portx.png"
  },
  {
    name: "PyInstaller",
    icon: "assets/icons/package.png"
  },
  {
    name: "GoDaddy",
    icon: "assets/icons/godaddy.png"
  }
];
addSkillCard("rkyTools", tools);