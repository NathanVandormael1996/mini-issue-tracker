// newsletter.js

// Zoek het formulier (gemaakt door Dev B)
const newsletterForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('newsletter-email');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
        // 1. Voorkom dat de pagina herlaadt (CRUCIAAL voor SPA/JS apps)
        event.preventDefault();

        const email = emailInput.value;

        // 2. Simpele validatie logica
        if (email && email.includes('@')) {
            console.log(`Nieuwe inschrijving ontvangen: ${email}`);

            // Simuleer opslag of succes feedback
            alert('Bedankt voor je inschrijving!');

            // Reset het veld
            emailInput.value = '';
        } else {
            alert('Vul aub een geldig emailadres in.');
        }
    });
}