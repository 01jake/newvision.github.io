



let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var logo = document.querySelector('.logo img');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 200) { // Cambiar el punto de scroll a 200px
        header.classList.add('scrolled');
        logo.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled');
    }

    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // Para evitar valores negativos
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var direccion = document.getElementById('direccion').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var servicio = document.getElementById('servicio').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !apellido || !email || !direccion ||  !telefono) {
        alert('Por favor, complete todos los campos del formulario.');
        return;
    }

    var whatsappMessage = `Nombre: ${nombre}%0AApellido: ${apellido} %0AEmail: ${email} %0ADireccion: ${direccion} %0ATeléfono: ${telefono}%0AServicio: ${servicio}%0AMensaje: ${mensaje} `;
    var whatsappURL = `https://wa.me/526623645921?text=${whatsappMessage}`; // Reemplaza con tu número de WhatsApp

    window.open(whatsappURL, '_blank'); // Abre el enlace de WhatsApp en una nueva pestaña
});
