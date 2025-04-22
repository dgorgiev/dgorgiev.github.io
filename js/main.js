document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            alert("Project clicked!");
        });
    });

    // You could also add dark mode, form validation, scroll effects, etc.
});
