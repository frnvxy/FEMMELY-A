function toggleMenu() {
    var menu = document.getElementById("navLinks");
    menu.classList.toggle("show-menu");
}

const accountForm = document.getElementById('accountForm');
        
if(accountForm) {
    accountForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const saveBtn = document.querySelector('.save-account-btn');
                
        saveBtn.textContent = 'Saved!';
        saveBtn.style.background = 'var(--gradient-slider)';
        saveBtn.style.borderColor = 'transparent';

        setTimeout(() => {
            saveBtn.textContent = 'Save Changes';
            saveBtn.style.background = 'transparent';
            saveBtn.style.borderColor = 'rgba(255, 255, 255, 0.7)';
            }, 2000);
        });
    }

document.addEventListener('DOMContentLoaded', function() {

    // for revising default display name & username //
    const displayHeaderName = document.getElementById('display-name');
    const displayHeaderUser = document.getElementById('display-username');

    const savedEmail = localStorage.getItem('currentUserEmail');
    const savedPassword = localStorage.getItem('currentUserPassword');
    const savedDisplayName = localStorage.getItem('currentDisplayName');
    const savedUserName = localStorage.getItem('currentUserName');

    const emailField = document.getElementById('userEmailInput');
    const passwordField = document.getElementById('userPasswordInput');

    if (savedEmail && emailField) {
        emailField.value = savedEmail;
        console.log("Profile updated with email:", savedEmail);
    }

    if (savedPassword && passwordField) {
        passwordField.value = savedPassword;
        console.log("Profile updated with password:", savedPassword);
    }

    // for displaying revised display name & username //
    displayHeaderName.textContent = savedDisplayName;
    displayHeaderUser.textContent = savedUserName;

});

// modal popup functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10); 
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300); 
}