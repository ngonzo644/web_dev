// an array of products (that are objects)
// const products = [
//   {
//   image: "images/products/athletic-cotton-socks-6-pairs.jpg",
//   name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
//   rating: {
//     stars : 4.5,
//     count: 87
//   },
//   price: 1090 // because 10.90 cant be done in JS

// },
// {
//   image : "images/products/intermediate-composite-basketball.jpg",
//   name : "Intermediate Size Basketball",
//   rating: {
//     stars: 4,
//     count: 127
//   },
//   price: 2095
// },
// {
//   image : "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//   name : "Adults Plain Cotton T-Shirt - 2 Pack",
//   rating : {
//     stars: 4.5,
//     count: 56
//   },
//   price: 799
// },
// {
//   image: "images/products/black-2-slot-toaster.jpg",
//   name : "2 Slot Toaster - Black",
//   rating : {
//     stars: 5,
//     count: 2197
//   },
//   price: 1899
// }
// ];

// we will use a forEach loop to loop thru each objects easily, and to use a function as a parameter

import {cart, addToCart} from '../data/cart.js';
import {products, loadProducts} from '../data/products.js';
import {formatCurrency} from '../scripts/utils/money.js';

loadProducts(renderProductsGrid);

function renderProductsGrid(){

  let productsHTML = "";

  products.forEach((product) => {
    productsHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="${product.getStarsUrl()}">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${product.getPrice()}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        ${product.extraInfoHTML()}

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;
  });

  document.querySelector('.js-products-grid').innerHTML = productsHTML;

  function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity')
      .innerHTML = cartQuantity;
  }

  document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();
      });
    });
}