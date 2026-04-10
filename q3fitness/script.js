/**
 * Main script handling Interactions, Modal & Navbar scroll effect
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    const navTextLogo = document.querySelector('#navbar > a');
    const navLinks = document.querySelectorAll('#navbar nav a');
    const navIcon = document.querySelector('#mobile-menu-btn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-gray-200');
            navbar.classList.remove('bg-transparent', 'py-4');
            navbar.classList.add('py-2');
            
            // Revert txt colors to dark on white bg
            navTextLogo.classList.remove('text-white');
            navTextLogo.classList.add('text-gray-900');
            
            navLinks.forEach(link => {
                link.classList.remove('text-white/90');
                link.classList.add('text-gray-900');
            });
            
            navIcon.classList.remove('text-white');
            navIcon.classList.add('text-gray-900');
            
        } else {
            navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-gray-200');
            navbar.classList.add('bg-transparent', 'py-4');
            navbar.classList.remove('py-2');

            // Set text back to white
            navTextLogo.classList.add('text-white');
            navTextLogo.classList.remove('text-gray-900');
            
            navLinks.forEach(link => {
                link.classList.add('text-white/90');
                link.classList.remove('text-gray-900');
            });
            
            navIcon.classList.add('text-white');
            navIcon.classList.remove('text-gray-900');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        document.body.classList.toggle('overflow-hidden');
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});

// Modal functions mapped globally
function openModal() {
    const modal = document.getElementById('lead-modal');
    const modalContent = document.getElementById('modal-content');
    
    modal.classList.remove('hidden');
    // small setTimeout to allow display block to apply before animating opacity
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('lead-modal');
    const modalContent = document.getElementById('modal-content');
    const leadForm = document.getElementById('lead-form');
    const successMsg = document.getElementById('success-msg');
    
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        
        // Reset form state on close
        leadForm.reset();
        leadForm.classList.remove('hidden');
        successMsg.classList.add('hidden');
    }, 300);
}

// Close modal on outside click
document.getElementById('lead-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

function submitForm(event) {
    event.preventDefault();
    
    const leadForm = document.getElementById('lead-form');
    const successMsg = document.getElementById('success-msg');
    
    // In a real scenario, API call happens here. 
    // Simulating API success
    leadForm.classList.add('hidden');
    successMsg.classList.remove('hidden');
}
