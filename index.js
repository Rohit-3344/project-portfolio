

const hammenu = document.querySelector('.ham-menu');

const navlist = document.querySelector('.navlist');

hammenu.addEventListener('click' , () => {
    hammenu.classList.toggle('active');
    navlist.classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');

    // Check if modeToggle exists
    if (modeToggle) {
        // Check if the user has previously chosen a theme
        const storedTheme = localStorage.getItem('theme');
        
        // Apply the stored theme or set default if none is found
        if (storedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            modeToggle.checked = true;
        } else {
            document.body.classList.add('light-mode');
            modeToggle.checked = false;
        }

        // Toggle between light and dark mode
        modeToggle.addEventListener('change', () => {
            if (modeToggle.checked) {
                // Enable dark mode
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                // Enable light mode
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    } else {
        console.warn('Mode toggle element not found.');
    }
});


















// // Select the toggle input
// const modeToggle = document.getElementById('mode-toggle');

// // Check if the user has previously chosen a mode
// if (localStorage.getItem('theme') === 'dark') {
//     document.body.classList.add('dark-mode');
//     modeToggle.checked = true;
// } else {
//     document.body.classList.add('light-mode');
//     modeToggle.checked = false;
// }

// // Toggle between light and dark mode
// modeToggle.addEventListener('change', () => {
//     if (modeToggle.checked) {
//         document.body.classList.replace('light-mode', 'dark-mode');
//         localStorage.setItem('theme', 'dark');
//     } else {
//         document.body.classList.replace('dark-mode', 'light-mode');
//         localStorage.setItem('theme', 'light');
//     }
// });
