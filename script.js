const numStars = 100;
            const galaxy = document.querySelector('.galaxy');

            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.left = `${Math.random() * 100}vw`;
                star.style.top = `${Math.random() * 100}vh`;
                galaxy.appendChild(star);
            }