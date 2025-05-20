// JavaScript para el Desplazamiento Suave en la Navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el comportamiento predeterminado del enlace

        // Obtiene el ID del destino (ej. "#proyectos")
        const targetId = this.getAttribute('href');
        // Encuentra el elemento de destino
        const targetElement = document.querySelector(targetId);

        // Si el elemento existe, desplázate a él suavemente
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Hace que el desplazamiento sea suave
            });
        }
    });
});


// JavaScript para el Efecto de Cortina de Humo (Burbujas/Niebla Ascendente)
const smokeEffectContainer = document.querySelector('.smoke-effect');

function createSmokeParticle() {
    // Crea un nuevo elemento div para la partícula
    const particle = document.createElement('div');
    particle.classList.add('smoke-particle'); // Añade la clase CSS para el estilo y animación

    // Asigna un tamaño aleatorio a la partícula
    const size = Math.random() * 60 + 30; // Tamaño entre 30px y 90px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Asigna una posición horizontal aleatoria (0% a 100% del ancho del contenedor)
    particle.style.left = `${Math.random() * 100}%`;
    // Hace que la partícula comience justo por debajo del contenedor para un efecto de "aparición"
    particle.style.bottom = `-20px`;

    // Asigna un retraso de animación aleatorio para que las partículas no aparezcan todas al mismo tiempo
    particle.style.animationDelay = `${Math.random() * 6}s`; // Retraso entre 0 y 6 segundos
    // Asigna una duración de animación aleatoria para que el movimiento sea más variado
    particle.style.animationDuration = `${Math.random() * 7 + 7}s`; // Duración entre 7 y 14 segundos

    // Añade la partícula al contenedor del efecto
    smokeEffectContainer.appendChild(particle);

    // Elimina la partícula del DOM una vez que su animación haya terminado
    // Esto evita que se acumulen miles de elementos invisibles en el DOM
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Genera nuevas partículas a intervalos regulares
// Este intervalo controla la densidad del "humo"
setInterval(createSmokeParticle, 800); // Crea una nueva partícula cada 800 milisegundos (0.8 segundos)

// Puedes ajustar el intervalo (ej. 500ms para más denso, 1500ms para menos denso)
// y los rangos de tamaño, duración y delay en la función `createSmokeParticle`
// para afinar el efecto a tu gusto.