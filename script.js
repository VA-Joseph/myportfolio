// script.js

// Select the theme toggle button
const toggleBtn = document.getElementById('theme-toggle');

// Load theme from localStorage or use system preference
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    toggleBtn.textContent = currentTheme === 'dark' ? '🌜' : '🌞';
}

// Toggle between light and dark mode
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    const newTheme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    toggleBtn.textContent = isDark ? '🌜' : '🌞';
}

// Event listener for theme toggle
toggleBtn.addEventListener('click', toggleTheme);

// Load the theme on page load
loadTheme();
