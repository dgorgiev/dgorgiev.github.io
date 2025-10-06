document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', (event) => {
            if (event.target.tagName.toLowerCase() === 'a') return;
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
            aboutHeader: "About",
            projectsHeader: "Projects",
            contactHeader: "Contact",
            hero: "David Gorgiev",
            about: "About me",
            aboutText1: "I’m a computer science student at <a href=\"https://www.epfl.ch\" target=\"_blank\">EPFL</a>.",
            interestIntro: "My main fields of interest are algorithms, machine learning, embedded systems and quantum technologies.",
            projects: "Personal projects",
            projectsText: "A script written in scala that follows and prints the path from any wikipedia page to the <a href=\"https://en.wikipedia.org/wiki/Philosophy\" target=\"_blank\">Philosophy</a> page.",
            contact: "Contact & links",
            epflLink: "EPFL profile"
        },
        fr: {
            aboutHeader: "À propos",
            projectsHeader: "Projets",
            contactHeader: "Contact",
            hero: "David Gorgiev",
            about: "À propos",
            aboutText1: "Je suis étudiant en informatique à <a href=\"https://www.epfl.ch\" target=\"_blank\">l'EPFL</a>.",
            interestIntro: "Mes principaux domaines d’intérêt sont les algorithmes, le machine learning, les systèmes embarqués et les technologies quantiques.",
            projects: "Projets personnels",
            projectsText: "Un script écrit en scala qui suit et imprime le chemin d'accès depuis n'importe quelle page wikipedia jusqu'à la page <a href=\"https://en.wikipedia.org/wiki/Philosophy\" target=\"_blank\">Philosophy</a>.",
            contact: "Contact & liens",
            epflLink: "profil EPFL"
        }
    };


    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "fr" : "en";
        langBtn.textContent = currentLang === "en" ? "FR" : "EN";

        // Update all translatable elements
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
    });
});
