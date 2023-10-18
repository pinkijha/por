// JavaScript for tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Initial state: Show the first tab content
tabContents[0].style.display = 'block';
tabButtons[0].classList.add('active');

// Event listener for tab button clicks
tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Hide all tab content and remove the 'active' class from buttons
        tabContents.forEach((content) => {
            content.style.display = 'none';
        });
        tabButtons.forEach((btn) => {
            btn.classList.remove('active');
        });

        // Show the selected tab content and mark the button as 'active'
        const tabId = button.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        tabContent.style.display = 'block';
        button.classList.add('active');
    });
});
