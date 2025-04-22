document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const link = card.dataset.link;
            if (link) {
                window.open(link, "_blank");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById("lang-btn");
    let currentLang = "en";

    const translations = {
        en: {
            hero: "Hi, I'm David 👋",
            heroText: "I’m a computer science student at EPFL. I like understanding and building stuff from scratch.",
            about: "About Me",
            aboutText: "Passionate about AI, quantum technologies, and robotics.",
            projects: "Small Projects",
            projectsText: "Did you know that if you follow iteratively the first link of (almost) any wikipedia page, you will at some point end up on the Philosophy wikipedia page ? This code automates it for you. Give it any wikipedia page and it will show you the path to the Philosophy wikipedia page!",
            contact: "Contact & Links"
        },
        fr: {
            hero: "Salut, je suis David 👋",
            heroText: "Je suis étudiant en informatique à l'EPFL. J'aime comprendre et construire des trucs en partant de zéro.",
            about: "À propos de moi",
            aboutText: "Passionné par l'IA, les technologies quantiques et la robotique.",
            projects: "Petits projets",
            projectsText: "Did you know that if you follow iteratively the first link of (almost) any wikipedia page, you will at some point end up on the Philosophy wikipedia page ? This code automates it for you. Give it any wikipedia page and it will show you the path to the Philosophy wikipedia page!",
            contact: "Contact & Liens"
        }
    };

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "fr" : "en";
        langBtn.textContent = currentLang === "en" ? "FR" : "EN";

        // Update text content
        document.querySelector("#hero h1").textContent = translations[currentLang].hero;
        document.querySelector("#hero p").textContent = translations[currentLang].heroText;
        document.querySelector("#about h2").textContent = translations[currentLang].about;
        document.querySelector("#about p").textContent = translations[currentLang].aboutText;
        document.querySelector("#projects h2").textContent = translations[currentLang].projects;
        document.querySelector("#projects h2").textContent = translations[currentLang].projectsText;
        document.querySelector("#contact h2").textContent = translations[currentLang].contact;
    });
});

