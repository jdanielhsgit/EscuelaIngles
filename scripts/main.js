/**
 * main.js - Global English Institute
 * Logic for scroll animations, navigation and form submissions.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    // 2. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            enviarContacto();
        });
    }
});

async function enviarContacto() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const programa = document.getElementById('programa').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !correo || !programa) {
        mostrarToast('Por favor completa los campos obligatorios.', 'error');
        return;
    }

    // Simulamos una carga
    const btnEnviar = document.getElementById('btnEnviar');
    const originalText = btnEnviar.innerText;
    btnEnviar.innerText = 'Enviando...';
    btnEnviar.disabled = true;

    try {
        // En una versión estática, simulamos el éxito después de un retraso
        await new Promise(resolve => setTimeout(resolve, 1500));

        mostrarToast('¡Gracias! Nos pondremos en contacto pronto (Simulación estática).', 'success');
        document.getElementById('contactForm').reset();
        $('.selectpicker').selectpicker('refresh'); // Refresh bootstrap-select if used

    } catch (error) {
        mostrarToast('Error de simulación: ' + error.message, 'error');
    } finally {
        btnEnviar.innerText = originalText;
        btnEnviar.disabled = false;
    }
}
