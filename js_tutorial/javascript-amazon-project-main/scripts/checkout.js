import {renderOrderSummary} from '../scripts/checkout/orderSummary.js';
import {renderPaymentSummary} from '../scripts/checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
//import '../data/cart-class.js';
// import '../data/backend-practice.js';

new Promise(()=>{
  loadProductsFetch().then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  })
})


// loadProducts(()=>{
//   renderOrderSummary();
//   renderPaymentSummary();
// });
