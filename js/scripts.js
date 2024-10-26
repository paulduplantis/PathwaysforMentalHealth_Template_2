// scripts.js

// Function to toggle expanded content visibility
function toggleExpand(element) {
    const card = element.closest('.profile-card, .provider-card, .product-card, .insight-card');
    if (card) { // Ensure the card element is found
        card.classList.toggle('expanded'); // Adds or removes the 'expanded' class
    }
}
