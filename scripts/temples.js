document.addEventListener("DOMContentLoaded", () => {
    // Update copyright year
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();

    // Update last modified date
    const lastModifiedSpan = document.getElementById("last-modified");
    lastModifiedSpan.textContent = document.lastModified;
});
