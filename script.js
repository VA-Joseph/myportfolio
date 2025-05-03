// Select the toggle button
const toggleBtn = document.getElementById('theme-toggle');

// Check saved preference from localStorage on load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = 'Light Mode';
    } else {
        document.body.classList.remove('dark-mode');
        toggleBtn.textContent = 'Dark Mode';
    }
});

// Toggle theme and update localStorage
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');

    toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
