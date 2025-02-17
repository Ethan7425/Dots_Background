const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle Properties
const particleCount = 100;
const maxDistance = 150;
const particles = [];
const lineWidth = 3;
const mouse = { x: null, y: null, radius: 250 };

// Create the particles
for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 4,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2  
    });
}

// Draw the particles and lines
function drawParticles(timestamp) {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    const rgb = "15, 24, 233";
    context.fillStyle = `rgb(${rgb})`;



    particles.forEach((p, index) => {
        // Apply repulsive force from mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distanceToMouse < mouse.radius) {
            const forceDirectionX = dx / distanceToMouse;
            const forceDirectionY = dy / distanceToMouse;
            const repulsion = (mouse.radius - distanceToMouse) / mouse.radius;
            p.x += forceDirectionX * repulsion * 10; 
            p.y += forceDirectionY * repulsion * 10;
        }

        // Move the particle
        p.x += p.dx;
        p.y += p.dy;

        // Bounce off the edges
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Draw the particle
        context.beginPath();
        context.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        context.fill();

        // Draw lines between particles
        for (let j = index + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distance = Math.hypot(p.x - p2.x, p.y - p2.y);

            if (distance < maxDistance) {
                const opacity = 1 - (distance / maxDistance);
                context.strokeStyle = `rgba(${rgb}, ${opacity})`;
                context.lineWidth = lineWidth;
                context.beginPath();
                context.moveTo(p.x, p.y);
                context.lineTo(p2.x, p2.y);
                context.stroke();
            }
        }
    });

    requestAnimationFrame(drawParticles); 
}

// Update mouse position
canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

// Handle window resize to adjust canvas size
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

drawParticles(); // Start the animation
