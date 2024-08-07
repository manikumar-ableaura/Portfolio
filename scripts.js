// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation (Simple Example)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation example
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactnumber = document.getElementById('Contact number').value;
    const message = document.getElementById('message').value;
    
    if(name && email && contactnumber && message) {
        alert('Message sent successfully!');
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
