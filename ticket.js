// Example JavaScript for frontend interactions

// Sample data for available exhibitions (you would fetch this from the backend)
const exhibitions = [
    { id: 1, name: 'Exhibition 1', date: 'Date 1', ticketsAvailable: 50 },
    { id: 2, name: 'Exhibition 2', date: 'Date 2', ticketsAvailable: 30 },
    // Add more exhibition data here
];

// Sample shopping cart data (to be managed dynamically)
let shoppingCart = [];

// Function to display available exhibitions
function displayExhibitions() {
    const exhibitionList = document.getElementById('exhibition-list');
    exhibitionList.innerHTML = '';

    exhibitions.forEach((exhibition) => {
        const card = document.createElement('div');
        card.classList.add('exhibition-card');
        card.innerHTML = `
            <h3>${exhibition.name}</h3>
            <p>Date: ${exhibition.date}</p>
            <p>Tickets Available: ${exhibition.ticketsAvailable}</p>
            <button onclick="addToCart(${exhibition.id})">Add to Cart</button>
        `;
        exhibitionList.appendChild(card);
    });
}

// Function to add an exhibition to the shopping cart
function addToCart(exhibitionId) {
    const selectedExhibition = exhibitions.find((exhibition) => exhibition.id === exhibitionId);

    if (selectedExhibition && selectedExhibition.ticketsAvailable > 0) {
        shoppingCart.push(selectedExhibition);
        selectedExhibition.ticketsAvailable--;
        displayExhibitions();
        displayShoppingCart();
    } else {
        alert('Tickets not available for this exhibition.');
    }
}

// Function to display the shopping cart
function displayShoppingCart() {
    const shoppingCartSection = document.getElementById('shopping-cart');
    shoppingCartSection.innerHTML = '';

    shoppingCart.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - Date: ${item.date}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        shoppingCartSection.appendChild(cartItem);
    });
}

// Function to remove an exhibition from the shopping cart
function removeFromCart(exhibitionId) {
    const index = shoppingCart.findIndex((item) => item.id === exhibitionId);
    if (index !== -1) {
        const removedItem = shoppingCart.splice(index, 1)[0];
        removedItem.ticketsAvailable++;
        displayExhibitions();
        displayShoppingCart();
    }
}

// Initial display
displayExhibitions();
displayShoppingCart();
