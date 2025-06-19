// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.getElementById('theme-toggle');

// Mobile Menu Toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Theme Toggle Functionality
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Initialize Theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    if (themeToggle) {
        themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
        themeToggle.addEventListener('click', () => {
            toggleTheme();
            themeToggle.textContent = localStorage.getItem('theme') === 'light' ? '🌙' : '☀️';
        });
    }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach((img) => {
            imageObserver.observe(img);
        });
    }
});

// Menu Filtering (for menu.html)
if (window.location.pathname.includes('menu.html')) {
    const menuItems = [
        { name: "Espresso", price: 3.50, category: "hot", vegan: false },
        { name: "Americano", price: 4.00, category: "hot", vegan: true },
        { name: "Cappuccino", price: 4.50, category: "hot", vegan: false },
        { name: "Iced Coffee", price: 4.00, category: "iced", vegan: true },
        { name: "Cold Brew", price: 4.50, category: "iced", vegan: true },
        { name: "Iced Latte", price: 5.00, category: "iced", vegan: false },
        { name: "Avocado Toast", price: 7.50, category: "food", vegan: true },
        { name: "Croissant", price: 3.50, category: "food", vegan: false },
    ];

    function renderMenu(items) {
        const menuContainer = document.getElementById('menu-container');
        if (!menuContainer) return;

        menuContainer.innerHTML = items.map(item => `
            <div class="menu-item">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <small>${item.vegan ? '🌱 Vegan' : ''}</small>
            </div>
        `).join('');
    }

    function filterMenu(category) {
        if (category === 'all') {
            renderMenu(menuItems);
        } else {
            const filtered = menuItems.filter(item => item.category === category);
            renderMenu(filtered);
        }
    }

    // Initialize menu
    document.addEventListener('DOMContentLoaded', () => {
        renderMenu(menuItems);
        
        // Add event listeners to filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                filterMenu(btn.dataset.filter);
            });
        });
    });
}

// Order Form Validation (for order.html)
if (window.location.pathname.includes('order.html')) {
    const orderForm = document.getElementById('order-form');
    
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const items = document.getElementById('items').value.trim();
            const time = document.getElementById('time').value;
            
            if (!name || !items || !time) {
                alert('Please fill in all fields');
                return;
            }
            
            // Save order to localStorage
            const order = { name, items, time, date: new Date().toLocaleString() };
            localStorage.setItem('lastOrder', JSON.stringify(order));
            
            // Show confirmation
            alert(`Order received! ${name}, your ${items} will be ready at ${time}.`);
            orderForm.reset();
        });
    }
}