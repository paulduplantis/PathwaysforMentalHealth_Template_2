// scripts.js

// Function to toggle expanded content visibility
function toggleExpand(element) {
    const card = element.closest('.profile-card, .provider-card, .product-card, .insight-card');
    card.classList.toggle('expanded'); // Adds or removes the 'expanded' class
}
