const searchInput = document.getElementById('search');
const items = document.querySelectorAll('.item');
//const sections = document.querySelectorAll('section h2');
//const descriptions = document.querySelectorAll('section p'); 


searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.querySelector('h3 a').textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = ''; 
            hasVisibleItems = true; 
        } else {
            item.style.display = 'none';
        }
    });

    sections.forEach((section, index) => {
        const sectionItems = section.nextElementSibling.querySelectorAll('.item');
        const hasItemsInSection = Array.from(sectionItems).some(item => item.style.display !== 'none');

        if (hasItemsInSection) {
            section.style.display = ''; 
            section.nextElementSibling.style.display = ''; 
        } else {
            section.style.display = 'none'; 
            section.nextElementSibling.style.display = 'none'; 
        }
    });

    if (!hasVisibleItems) {
        sections.forEach((section, index) => {
            section.style.display = ''; 
            descriptions[index].style.display = ''; 
        });
    }
});