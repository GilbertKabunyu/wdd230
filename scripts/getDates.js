// Get the current year and update the copyright year
const copyrightYear = document.getElementById('copyright-year');
copyrightYear.textContent = new Date().getFullYear();

// Get the last modified date and update the footer
const lastModification = document.getElementById('lastModified');
lastModification.textContent = `Last Modification: ${document.lastModified}`;