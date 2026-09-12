// State Management
let currentPage = 1;

function nextPage(num) {
    const currentEl = document.getElementById(`page-${currentPage}`);
    const nextEl = document.getElementById(`page-${num}`);

    // Cinematic Transition
    currentEl.classList.remove('active');
    
    setTimeout(() => {
        currentPage = num;
        nextEl.classList.add('active');
        
        // Trigger specific animations based on page
        if(num === 7) startFinalCelebration();
    }, 100);
}

// Cherry Blossom System
function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.innerHTML = '🌸';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.opacity = Math.random() * 0.5 + 0.5;
    petal.style.fontSize = (Math.random() * 15 + 10) + 'px';
    
    const duration = Math.random() * 5 + 5;
    petal.style.animationDuration = duration + 's';
    
    document.getElementById('petal-container').appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Sparkle System
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'petal'; // reuse drift but different look
    sparkle.innerHTML = '✨';
    sparkle.style.left = Math.random() * 100 + 'vw';
    
    const duration = Math.random() * 3 + 2;
    sparkle.style.animationDuration = duration + 's';
    
    document.getElementById('sparkle-container').appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, duration * 1000);
}

// Final Page Explosion
function startFinalCelebration() {
    for(let i=0; i<50; i++) {
        setTimeout(createPetal, i * 100);
        setTimeout(createSparkle, i * 150);
    }
}

// Initialization
window.onload = () => {
    // Start continuous petal fall
    setInterval(createPetal, 600);
    setInterval(createSparkle, 1000);

    // Initial animations
    document.querySelectorAll('.fade-in').forEach((el, i) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.style.transition = 'opacity 1.5s ease';
            el.style.opacity = '1';
        }, i * 500);
    });
};