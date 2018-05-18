'use strict';

var Cart = [];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cartArray')) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  cart.tBodies[0].innerHTML = ' '

 
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart

function showCart() {
  // TODO: Find the table body
  // var cartTBody = document.getElementById("cartTBody");
  // TODO: Iterate over the items in the cart
  for(var i in Cart){
    console.log('test')
      
    var cartTBodies = document.getElementById('cart.tBodies');
    // TODO: Create a TR
    var cartTr = document.createElement('tr')
    // TODO: Create a TD for the delete link, quantity,  and the item
    var deleteTd = document.createElement('td');
    deleteTd.textContent = "X";
    var quantityTd = document.createElement('td');
    quantityTd.textContent = Cart[i].quantity
    var itemTd = document.createElement('td');
    itemTd.textContent = Cart[i].item


    cartTr.appendChild(itemTd);
    cartTr.appendChild(quantityTd);
    cartTr.appendChild(deleteTd);
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    cart.tBodies[0].appendChild(cartTr);
    
    
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
