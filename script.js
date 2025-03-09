document.addEventListener('DOMContentLoaded', () => {
    const hatchButton = document.getElementById('hatchButton');
    const egg = document.getElementById('egg');
    const square = document.getElementById('square');
    let isAnimating = false;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    async function hatchEgg() {
        if (isAnimating) return;
        isAnimating = true;

        // Reset elements
        square.classList.add('hidden');
        square.classList.remove('appear');
        egg.classList.remove('shake');

        // Show egg
        egg.classList.remove('hidden');
        egg.classList.add('appear');

        // Wait a moment
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Shake egg
        egg.classList.add('shake');

        // Wait for shaking
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Hide egg and show square
        egg.classList.add('hidden');
        square.style.backgroundColor = getRandomColor();
        square.classList.remove('hidden');
        square.classList.add('appear');

        isAnimating = false;
    }

    hatchButton.addEventListener('click', hatchEgg);
});
