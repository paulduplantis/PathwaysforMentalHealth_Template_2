function toggleExpand(link) {
    const expandableContent = link.closest('.profile-card').nextElementSibling;
    if (expandableContent) {
        expandableContent.style.width = '600px'; // Adjust the width here if needed
        expandableContent.style.display = expandableContent.style.display === 'block' ? 'none' : 'block';
    } else {
        console.error("No expandable content found for this record.");
    }
}
