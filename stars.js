// Enhanced ambient star generation script
        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('star-container');
            const numStars = 300; // Increased density slightly
            const colors = ['#FFFFFF', '#A8C5D6', '#8B8FC7'];

            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.style.position = 'absolute';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;

                const size = Math.random() > 0.8 ? '2px' : '1px';
                star.style.width = size;
                star.style.height = size;

                star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                star.style.opacity = (Math.random() * 0.3) + 0.2; // 20-50% opacity
                star.style.borderRadius = '50%';

                container.appendChild(star);
            }
        });