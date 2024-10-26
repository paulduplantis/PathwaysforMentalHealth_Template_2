// scripts.js

// Function to toggle the expanded content visibility in each card
function toggleExpand(element) {
    const card = element.closest('.profile-card, .provider-card, .product-card, .insight-card');
    card.classList.toggle('expanded'); // Adds or removes the 'expanded' class
}
