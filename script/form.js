document.addEventListener('DOMContentLoaded', () => {
    const boton = document.querySelector('.btn-submit');
    const status = document.getElementById('form-status');

    boton.addEventListener('click', async () => {
        const nombre = document.querySelector('input[placeholder="Nombre"]').value.trim();
        const email = document.querySelector('input[placeholder="Email"]').value.trim();
        const mensaje = document.querySelector('textarea').value.trim();

        if (!nombre || !email || !mensaje) {
            status.textContent = 'Por favor, rellena todos los campos.';
            status.className = 'error';
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValido.test(email)) {
            status.textContent = 'Por favor, introduce un email válido.';
            status.className = 'error';
            return;
        }

        try {
            const respuesta = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '75131586-52ad-4e1a-b70c-2324702c92d9',
                    nombre: nombre,
                    email: email,
                    mensaje: mensaje
                })
            });

            const resultado = await respuesta.json();

            if (resultado.success) {
                status.textContent = 'Mensaje enviado correctamente, en breve me pondré en contacto contigo.';
                status.className = 'success';
            } else {
                status.textContent = 'Error al enviar tu mensaje, el email es inválido o el servidor no está disponible.';
                status.className = 'error';
            }
        } catch (error) {
            status.textContent = 'Error al enviar el mensaje.';
            status.className = 'error';
        }
    });
});