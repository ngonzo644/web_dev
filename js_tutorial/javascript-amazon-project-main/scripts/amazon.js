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

import {cart} from '../data/cart.js';
import {products} from '../data/products.js';

let productsHTML = "";

products.forEach( (products) => {
  productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${products.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(products.price /100).toFixed(2)}
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

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" 
          data-product-id="${products.id}">
            Add to Cart
          </button>
        </div>`;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", ()=>{
    const productId = button.dataset.productId;

    let matchingItem;

    cart.forEach((item)=> {
      if(productId === item.productId)
      {
        matchingItem = item;
      }
    })

    if (matchingItem)
    {
      matchingItem.quantity += 1;
    }
    else
    {
    cart.push({
      productId: productId,
      quantity: 1
    })
    }
    let totalQuant= 0;

    cart.forEach((item)=>{
      totalQuant += item.quantity;
    })

    document.querySelector(".js-cart-quantity").innerHTML = totalQuant;

  })
})


