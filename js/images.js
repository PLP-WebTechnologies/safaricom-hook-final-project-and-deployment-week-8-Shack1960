// Image path constants
const PLACEHOLDER_IMAGES = {
    // Team members
    teamMember1: 'https://placehold.co/300x300/4A90E2/FFFFFF/png?text=Team+Member+1',
    teamMember2: 'https://placehold.co/300x300/4A90E2/FFFFFF/png?text=Team+Member+2',
    teamMember3: 'https://placehold.co/300x300/4A90E2/FFFFFF/png?text=Team+Member+3',
    
    // Partners
    partner1: 'https://placehold.co/200x100/4A90E2/FFFFFF/png?text=Partner+1',
    partner2: 'https://placehold.co/200x100/4A90E2/FFFFFF/png?text=Partner+2',
    partner3: 'https://placehold.co/200x100/4A90E2/FFFFFF/png?text=Partner+3',
    
    // Case Studies
    caseStudy1: 'https://placehold.co/600x400/4A90E2/FFFFFF/png?text=Case+Study+1',
    caseStudy2: 'https://placehold.co/600x400/4A90E2/FFFFFF/png?text=Case+Study+2',
    caseStudy3: 'https://placehold.co/600x400/4A90E2/FFFFFF/png?text=Case+Study+3',
    
    // Hero Images
    heroHome: 'https://placehold.co/1200x600/4A90E2/FFFFFF/png?text=Welcome+to+Uwazi',
    heroAbout: 'https://placehold.co/1200x600/4A90E2/FFFFFF/png?text=About+Us',
    heroServices: 'https://placehold.co/1200x600/4A90E2/FFFFFF/png?text=Our+Services',
    heroReports: 'https://placehold.co/1200x600/4A90E2/FFFFFF/png?text=Reports+and+Impact',
    heroContact: 'https://placehold.co/1200x600/4A90E2/FFFFFF/png?text=Contact+Us'
};

// Function to load placeholder images
function loadPlaceholderImages() {
    const images = document.querySelectorAll('img[data-placeholder]');
    images.forEach(img => {
        const placeholderKey = img.getAttribute('data-placeholder');
        if (PLACEHOLDER_IMAGES[placeholderKey]) {
            img.src = PLACEHOLDER_IMAGES[placeholderKey];
        }
    });
}

// Load images when the document is ready
document.addEventListener('DOMContentLoaded', loadPlaceholderImages);
