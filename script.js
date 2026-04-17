// Glitch effect on scroll
const glitchElements = document.querySelectorAll('.glitch');

window.addEventListener('scroll', () => {
    glitchElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.style.animation = 'glitch 0.2s infinite';
        }
    });
});

// Terminal typing effect
const terminalContent = document.querySelector('.terminal-content');
if (terminalContent) {
    const originalContent = terminalContent.innerHTML;
    terminalContent.innerHTML = '';
    
    const lines = originalContent.split('<br>');
    let lineIndex = 0;

    function typeLine() {
        if (lineIndex < lines.length) {
            const line = document.createElement('div');
            line.innerHTML = lines[lineIndex];
            terminalContent.appendChild(line);
            lineIndex++;
            setTimeout(typeLine, 100);
        }
    }

    window.addEventListener('load', () => {
        setTimeout(typeLine, 500);
    });
}

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Random glitch effect on skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.textShadow = `
            0 0 20px var(--neon-cyan),
            0 0 30px var(--neon-pink)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.textShadow = 'none';
    });
});

// Matrix rain effect in background (optional)
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '2';
canvas.style.opacity = '0.05';
canvas.style.pointerEvents = 'none';

// Add some interactive glitch effect on click
document.addEventListener('click', (e) => {
    const glitch = document.createElement('div');
    glitch.style.position = 'fixed';
    glitch.style.left = e.clientX + 'px';
    glitch.style.top = e.clientY + 'px';
    glitch.style.color = ['var(--neon-cyan)', 'var(--neon-pink)', 'var(--neon-green)'][Math.floor(Math.random() * 3)];
    glitch.style.fontSize = '2rem';
    glitch.style.pointerEvents = 'none';
    glitch.textContent = ['>', '<', '[', ']', '|'][Math.floor(Math.random() * 5)];
    glitch.style.animation = 'fadeOut 0.8s forwards';
    
    document.body.appendChild(glitch);
    
    setTimeout(() => glitch.remove(), 800);
});

// Fade out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-30px);
        }
    }
`;
document.head.appendChild(style);

// Add pulse effect to neon text on load
window.addEventListener('load', () => {
    const neonElements = document.querySelectorAll('[class*="neon-"]');
    neonElements.forEach((el, index) => {
        el.style.animation = `pulse 2s infinite ${index * 0.1}s`;
    });
});

const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }
`;
document.head.appendChild(pulseStyle);
