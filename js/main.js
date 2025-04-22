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
