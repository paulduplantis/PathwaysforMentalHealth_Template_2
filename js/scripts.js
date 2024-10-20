// scripts.js

// Initialize Supabase
const SUPABASE_URL = 'https://your-project-url.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fetch records from Supabase
document.addEventListener('DOMContentLoaded', fetchRecords);

async function fetchRecords() {
    const { data, error } = await supabase
        .from('records')
        .select('*');

    if (error) {
        console.error('Error fetching data:', error);
    } else {
        renderRecords(data);
    }
}

// Render records dynamically based on fetched data
function renderRecords(records) {
    const feedContainer = document.querySelector('.feed-container');
    feedContainer.innerHTML = ''; // Clear existing records

    records.forEach(record => {
        let cardClass = '';
        let tagText = '';
        let iconClass = '';

        switch (record.type) {
            case 'profile':
                cardClass = 'profile-card';
                tagText = 'Profile';
                iconClass = 'fas fa-user-circle';
                break;
            case 'provider':
                cardClass = 'provider-card';
                tagText = 'Provider';
                iconClass = 'fas fa-hands-helping';
                break;
            case 'product':
                cardClass = 'product-card';
                tagText = 'Product';
                iconClass = 'fas fa-box-open';
                break;
            case 'insight':
                cardClass = 'insight-card';
                tagText = 'Insight';
                iconClass = 'fas fa-lightbulb';
                break;
        }

        const cardHTML = `
            <div class="${cardClass}">
                <span class="${cardClass.replace('-card', '-tag')}">${tagText}</span>
                <i class="${iconClass}"></i>
                <div class="profile-title">${record.title}</div>
                <p>${record.description}</p>
            </div>
        `;

        feedContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}
