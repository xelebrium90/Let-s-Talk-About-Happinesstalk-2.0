// Updated Impulse file content with new features and styling

// Impulse entries
const impulses = [
    {
        text: 'Impulse 1',
        question: 'Frage: Was denkst du über diesen Ansatz?',
        // other properties
    },
    // ... other impulses
];

// Function to add a card
function addCard(category, impulse) {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Set innerHTML for category and impulse - proper escaping
    card.innerHTML = `<h2>${escapeHtml(category)}</h2><p>${escapeHtml(impulse.text)}</p><small style='font-size: small; color: muted; margin-top: 10px;'>${escapeHtml(impulse.question)}</small>`;
    // existing behavior for timer and such...
    
    document.body.appendChild(card);
}

// Helper function for escaping HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
}

// Add additional styling for question block
const style = document.createElement('style');
style.innerHTML = `
    .question {
        font-size: smaller;
        color: muted;
        margin-top: 10px;
    }
`;
document.head.appendChild(style);

// Existing logic continues...