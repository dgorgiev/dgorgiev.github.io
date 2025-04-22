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
            about: "About Me",
            aboutText: "Passionate about AI, quantum technologies, and robotics.",
            projects: "Small Projects",
            contact: "Contact & Links"
        },
        fr: {
            hero: "Salut, je suis David 👋",
            heroText: "Je suis étudiant en informatique à l'EPFL. J'aime comprendre et construire des trucs en partant de zéro.",
            about: "À propos de moi",
            aboutText: "Passionné par l'IA, les technologies quantiques et la robotique.",
            projects: "Petits projets",
            contact: "Contact & Liens"
        }
    };

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "fr" : "en";
        langBtn.textContent = currentLang === "en" ? "FR" : "EN";

        // Update text content
        document.querySelector("#hero h1").textContent = translations[currentLang].hero;
        document.querySelector("#about h2").textContent = translations[currentLang].about;
        document.querySelector("#about p").textContent = translations[currentLang].aboutText;
        document.querySelector("#projects h2").textContent = translations[currentLang].projects;
        document.querySelector("#contact h2").textContent = translations[currentLang].contact;
    });
});

