// Cat Cursor Animation
const catCursor = document.getElementById('cat-cursor');
document.addEventListener('mousemove', (e) => {
    catCursor.style.left = e.clientX + 'px';
    catCursor.style.top = e.clientY + 'px';
});

// Projects Data
const projects = [
    {
        title: 'Taps-Macropad-V3',
        description: 'Advanced macropad with customizable keys and RGB lighting',
        repo: 'https://github.com/sudo-apt-install-tap/Taps-Macropad-V3',
        language: 'Python',
        tag: 1
    },
    {
        title: 'TaoTeChing',
        description: 'An open-source split keyboard made for ergonomics with minimalist design',
        repo: 'https://github.com/sudo-apt-install-tap/TaoTeChing',
        language: 'Python',
        tag: 2
    },
    {
        title: 'ByteVile',
        description: 'Development version with advanced features and optimizations',
        repo: 'https://github.com/sudo-apt-install-tap/ByteVile-Alpha-Dev-Version-1.1',
        language: 'Python',
        tag: 3
    },
    {
        title: 'RPForged',
        description: 'A simple microcontroller with the RP2040 chip',
        repo: 'https://github.com/sudo-apt-install-tap/RPForged',
        language: 'Hardware',
        tag: 4
    },
    {
        title: 'BuildGuildKolkata',
        description: 'Community project for builders and makers in Kolkata',
        repo: 'https://github.com/sudo-apt-install-tap/BuildGuildKolkata',
        language: 'CSS',
        tag: 5
    },
    {
        title: 'MUSE',
        description: 'Creative project combining music and electronics',
        repo: 'https://github.com/sudo-apt-install-tap/MUSE',
        language: 'Multi',
        tag: 6
    }
];

// Render Projects
const projectsGrid = document.getElementById('projects-grid');
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-tag">${project.tag}</div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div style="margin-bottom: 15px;">
            <span style="
                display: inline-block;
                padding: 5px 10px;
                background: #c6a0f6;
                color: #24273a;
                border-radius: 3px;
                font-size: 12px;
                font-weight: bold;
            ">${project.language}</span>
        </div>
        <div class="project-links">
            <a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="project-link">
                View on GitHub
            </a>
            <a href="projects.html" class="project-link" style="background: #ed8796;">
                Details
            </a>
        </div>
    `;
    projectsGrid.appendChild(card);
});
