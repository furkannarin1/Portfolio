
// Ouvrir la modale
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Fermer la modale
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Fermer la modale en cliquant en dehors du contenu
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

  document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.querySelector('.carousel');
        const items = carousel.querySelectorAll('.carousel-item');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        let currentIndex = 0;

        function updateCarousel() {
            const itemWidth = items[0].offsetWidth + 40; // item width + padding
            carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        });
    });



    document.addEventListener('DOMContentLoaded', function () {
        const contactIcon = document.getElementById('contactIcon');
        const contactInfo = document.getElementById('contactInfo');
        const closeContactInfo = document.getElementById('closeContactInfo');
    
        contactIcon.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent event from bubbling to the window
            contactInfo.style.display = contactInfo.style.display === 'block' ? 'none' : 'block';
        });
    
        closeContactInfo.addEventListener('click', function () {
            contactInfo.style.display = 'none';
        });
    
        // Close contact info when clicking outside of it
        window.addEventListener('click', function (event) {
            if (event.target !== contactInfo && event.target !== contactIcon && !contactInfo.contains(event.target)) {
                contactInfo.style.display = 'none';
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const dropdownContent = document.querySelector('.dropdown-content');
        const selectedFlag = document.querySelector('.dropbtn img');
        const flags = dropdownContent.querySelectorAll('a');
    
        // Load the previously selected language from localStorage
        const selectedLanguage = localStorage.getItem('selectedLanguage');
        if (selectedLanguage) {
            selectedFlag.src = selectedLanguage;
        }
    
        flags.forEach(flag => {
            flag.addEventListener('click', function() {
                selectedFlag.src = this.querySelector('img').src;
                selectedFlag.alt = this.querySelector('img').alt;
                // Save the selected language to localStorage
                localStorage.setItem('selectedLanguage', this.querySelector('img').src);
            });
        });
    });
    
    
    










