document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'subpanel-toggle'
    document.querySelectorAll('.subpanel-toggle').forEach(function(toggle) {
        // Add a click event listener to each of them
        toggle.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            // Find the nearest subpanel within the same parent element
            const subpanel = this.closest('.fields-wrapper').querySelector('.subpanel');
            // Toggle the 'hidden' class on the subpanel to show or hide it
            if (subpanel) {
                subpanel.classList.toggle('hidden');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the "Don't Send Me Any Email" checkbox
    const dontSendEmailCheckbox = document.getElementById('all-general-emails-off');

    // Function to enable or disable other checkboxes
    function toggleCheckboxes(enable) {
        document.querySelectorAll('.global-notification').forEach(function(checkbox) {
            if (checkbox !== dontSendEmailCheckbox) { // Skip the "Don't Send Me Any Email" checkbox
                checkbox.disabled = !enable;
            }
        });
    }

    // Initialize checkboxes based on the state of "Don't Send Me Any Email"
    toggleCheckboxes(!dontSendEmailCheckbox.checked);

    // Add event listener to "Don't Send Me Any Email" checkbox
    dontSendEmailCheckbox.addEventListener('change', function() {
        toggleCheckboxes(!this.checked);
    });

    // Existing code to toggle subpanels
    document.querySelectorAll('.subpanel-toggle').forEach(function(toggle) {
        toggle.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const subpanel = this.closest('.fields-wrapper').querySelector('.subpanel');
            if (subpanel) {
                subpanel.classList.toggle('hidden');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the "Don't Send Me Any Email" checkbox
    const allEmailsOffCheckbox = document.getElementById('all-general-emails-off');
    
    // Add event listener to "Don't Send Me Any Email" checkbox
    allEmailsOffCheckbox.addEventListener('change', function() {
        // Select all checkboxes except the "Don't Send Me Any Email" checkbox
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:not(#all-general-emails-off)');
        
        // Select all sections with the class 'disabled-section'
        const disabledSections = document.querySelectorAll('.disabled-section');
        
        // Enable/disable all other checkboxes based on the state of "Don't Send Me Any Email" checkbox
        checkboxes.forEach(function(checkbox) {
            checkbox.disabled = allEmailsOffCheckbox.checked;
            checkbox.checked = !allEmailsOffCheckbox.checked; // Check/uncheck based on the "Don't Send Me Any Email" checkbox
        });
        
        // Adjust opacity of disabled sections based on the state of "Don't Send Me Any Email" checkbox
        disabledSections.forEach(function(section) {
            section.style.opacity = allEmailsOffCheckbox.checked ? '0.7' : '1';
        });
    });
});

function toggleNav() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}
