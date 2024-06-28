// Visit message
const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
    visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const timeDiff = Date.now() - parseInt(lastVisit);
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff < 1) {
        visitMessage.textContent = 'Back so soon! Awesome!';
    } else {
        visitMessage.textContent = `You last visited ${daysDiff} day${daysDiff === 1 ? '' : 's'} ago.`;
    }
}

localStorage.setItem('lastVisit', Date.now());
