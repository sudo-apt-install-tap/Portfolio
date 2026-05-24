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
        language: 'Python'
    },
    {
        title: 'TaoTeChing',
        description: 'An open-source split keyboard made for ergonomics with minimalist design',
        repo: 'https://github.com/sudo-apt-install-tap/TaoTeChing',
        language: 'Python'
    },
    {
        title: 'ByteVile',
        description: 'Development version with advanced features and optimizations',
        repo: 'https://github.com/sudo-apt-install-tap/ByteVile-Alpha-Dev-Version-1.1',
        language: 'Python'
    },
    {
        title: 'RPForged',
        description: 'A simple microcontroller with the RP2040 chip',
        repo: 'https://github.com/sudo-apt-install-tap/RPForged',
        language: 'Hardware'
    },
    {
        title: 'BuildGuildKolkata',
        description: 'Community project for builders and makers in Kolkata',
        repo: 'https://github.com/sudo-apt-install-tap/BuildGuildKolkata',
        language: 'CSS'
    },
    {
        title: 'MUSE',
        description: 'Creative project combining music and electronics',
        repo: 'https://github.com/sudo-apt-install-tap/MUSE',
        language: 'Multi'
    }
];

// Journals Data
const journals = [
    {
        date: '2026-05-24',
        title: 'Keyboard PCB Design Workflow',
        excerpt: 'Today I refined the PCB layout for TaoTeChing v2. The ortholinear design is looking clean with optimized trace routing.',
        tags: ['#keyboard', '#hardware', '#pcb']
    },
    {
        date: '2026-05-23',
        title: 'Macropad Firmware Updates',
        excerpt: 'Released v3.2 of Taps-Macropad with improved macro recording and support for custom RGB animations.',
        tags: ['#firmware', '#embedded', '#project']
    },
    {
        date: '2026-05-21',
        title: 'Hack Club Workshop Success',
        excerpt: 'Conducted an amazing electronics workshop with 25 participants. Built working LED circuits from scratch!',
        tags: ['#community', '#hackclub', '#learning']
    },
    {
        date: '2026-05-19',
        title: 'MUSE Audio Interface Implementation',
        excerpt: 'Completed the hardware audio interface prototype. Real-time synthesis is working beautifully on the RP2040.',
        tags: ['#audio', '#hardware', '#creative']
    },
    {
        date: '2026-05-17',
        title: 'RPForged Testing Phase Complete',
        excerpt: 'All GPIO pins tested and working. Open-source schematics are now available on GitHub for the community.',
        tags: ['#microcontroller', '#testing', '#opensrc']
    },
    {
        date: '2026-05-15',
        title: 'Portfolio Site Goes Static',
        excerpt: 'Converted the portfolio from React to vanilla HTML/CSS/JS. Massive performance improvement and cleaner code!',
        tags: ['#web', '#portfolio', '#performance']
    }
];

// Render Projects
const projectsGrid = document.getElementById('projects-grid');
if (projectsGrid) {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
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
}

// Render Journals
const journalsGrid = document.getElementById('journals-grid');
if (journalsGrid) {
    journals.forEach(journal => {
        const card = document.createElement('div');
        card.className = 'journal-card';
        const tagsHTML = journal.tags.map(tag => `<span class="journal-tag">${tag}</span>`).join('');
        
        card.innerHTML = `
            <div class="journal-date">${new Date(journal.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            })}</div>
            <h3>${journal.title}</h3>
            <p class="journal-excerpt">${journal.excerpt}</p>
            <div class="journal-tags">
                ${tagsHTML}
            </div>
        `;
        journalsGrid.appendChild(card);
    });
}
