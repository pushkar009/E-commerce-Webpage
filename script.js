// Initialize quantity variable
var quant = 0;
// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Get the closest parent container of the button
    const parent = event.target.closest('div');
    // Find the input field within the same container
    const quantityInput = parent.querySelector('#quantity');
    // Find the cart message element within the same container
    const messageElement = parent.querySelector('.cart-message');
    // Retrieve the quantity value from the input field
    const quantity = parseInt(quantityInput.value);

    // Combine the total number of products
    const q = quant + quantity;
    // Update the message based on the quantity value
    messageElement.textContent = `${q} product(s) added to cart!`;
    messageElement.style.color = 'green';
    setTimeout(() => {
      messageElement.textContent = ''; // Clear the message
    }, 3000);
    quant = q;
    const update = document.getElementById('number');
    update.innerText = quant;
  });
});
