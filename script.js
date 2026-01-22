document.addEventListener("DOMContentLoaded", function() {
    // 🌟 Smooth Scrolling for Navbar Links
    document.querySelectorAll('.smooth-scroll').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });



    // 📩 Contact Form Validation & Submission
    const sendButton = document.querySelector(".send-button");
    const contactForm = document.getElementById("contactForm");

    if (sendButton && contactForm) {
        sendButton.addEventListener("click", function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            let errorMessage = "";

            // 🛑 Validation Logic
            if (!name) {
                errorMessage = "⚠ Please enter your name.";
            } else if (!validateEmail(email)) {
                errorMessage = "⚠ Please enter a valid email address.";
            } else if (!message) {
                errorMessage = "⚠ Message cannot be empty.";
            }

            if (errorMessage) {
                showError(errorMessage);
                return;
            }

            // Show success message instead of alert
            showSuccess("✅ Your message has been sent successfully!");
            contactForm.reset();
        });
    } else {
        console.error("Form or button not found!");
    }

    // Email Validation Function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Error Display Function
    function showError(message) {
        let errorDiv = document.getElementById("error-message");
        if (!errorDiv) {
            errorDiv = document.createElement("div");
            errorDiv.id = "error-message";
            errorDiv.style.color = "red";
            errorDiv.style.marginTop = "10px";
            document.querySelector(".contact-form").appendChild(errorDiv);
        }
        errorDiv.innerText = message;
    }

    // Success Message Function
    function showSuccess(message) {
        let successDiv = document.getElementById("success-message");
        if (!successDiv) {
            successDiv = document.createElement("div");
            successDiv.id = "success-message";
            successDiv.style.color = "green";
            successDiv.style.marginTop = "10px";
            document.querySelector(".contact-form").appendChild(successDiv);
        }
        successDiv.innerText = message;

        // Remove success message after 3 seconds
        setTimeout(() => {
            successDiv.innerText = "";
        }, 3000);
    }

    // 🔝 Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Smooth scroll to top on click
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});