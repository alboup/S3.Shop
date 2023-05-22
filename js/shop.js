// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [{
  id: 1,
  name: 'cooking oil',
  price: 10.5,
  type: 'grocery',
  offer: {
      number: 3,
      percent: 20
  }
},
{
  id: 2,
  name: 'Pasta',
  price: 6.25,
  type: 'grocery'
},
{
  id: 3,
  name: 'Instant cupcake mixture',
  price: 5,
  type: 'grocery',
  offer: {
      number: 10,
      percent: 30
  }
},
{
  id: 4,
  name: 'All-in-one',
  price: 260,
  type: 'beauty'
},
{
  id: 5,
  name: 'Zero Make-up Kit',
  price: 20.5,
  type: 'beauty'
},
{
  id: 6,
  name: 'Lip Tints',
  price: 12.75,
  type: 'beauty'
},
{
  id: 7,
  name: 'Lawn Dress',
  price: 15,
  type: 'clothes'
},
{
  id: 8,
  name: 'Lawn-Chiffon Combo',
  price: 19.99,
  type: 'clothes'
},
{
  id: 9,
  name: 'Toddler Frock',
  price: 9.99,
  type: 'clothes'
}
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];
// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = []; 
var totalCarro = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {

            // 2. Add found product to the cartList array
            cartList.push(products[i]);
            console.log('estic a buy, i cartList= ')
            console.log(cartList);

        }

    }
}

// Exercise 2
function cleanCart() { 
  console.log('estic a cleanCart')
    // Clean shopping cart modal
   
    cart = []
    totalCarro = 0
    printCart()
}

// Exercise 3
function calculateTotal() {
  totalCarro = 0
  console.log('estic a calculateTotal, i cart= ') 
  console.log(cart)
    // Calculate total price of the cart using the "cart" array
     
    for (let i = 0; i < cart.length; i++) {
        //total += cart[i].price 
        var product = cart[i];
        totalCarro += product.subtotalWithDiscount
    }
    console.log(totalCarro)
    return(totalCarro)
}

// Exercise 4
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    function generateCart() {
        console.log('estic a generateCart, i cart= ' + cart)
        cart = [];
        for (var i = 0; i < cartList.length; i++) {
          var product = cartList[i];
          var existingProductIndex = -1;

          // Cerquem si el producte ja existeix a l'array cart
          for (var j = 0; j < cart.length; j++) {
            if (cart[j].name === product.name) {
              existingProductIndex = j;
              break;
            }
          }
      
          // Si el producte no existeix a l'array cart, l'afegim amb quantitat 1
          if (existingProductIndex === -1) {
            product.quantity = 1;
        
            cart.push(product);
          } else {
            // Si el producte ja existeix a l'array cart, incrementem la quantitat
            cart[existingProductIndex].quantity++;
          }

        }
        console.log('he creat cart')
        cartSenseDescompte = cart
        console.log(cartSenseDescompte)
       

        applyPromotionsCart(cart)
        totalCarro = calculateTotal()
        printCart()
        return cart;
       
      }


// Exercise 5  // Apply promotions to each item in the array "cart"
function applyPromotionsCart(cart) {
  cart = cartSenseDescompte
  console.log('estic a applyPromotionsCart, i cart= ')
  console.log(cart)
    var numGrocerys = 0
    var DescompteGrocery = false

    for (var i = 0; i < cart.length; i++) {
      var product = cart[i];
      if (product.type === 'grocery') {
          numGrocerys += product.quantity
          if (numGrocerys >=10) {
            DescompteGrocery = true
            break 
          }
      } 
    }
    console.log('DescompteGrocery= ' + DescompteGrocery + ' numGrocerys= ' + numGrocerys)
    for (var i = 0; i < cart.length; i++) {
      var product = cart[i];
      var quantity = product.quantity;
      console.log('quantity: ' + quantity)
      var price = product.price  
      console.log('price = ' + price)
  
      // Promoció 1: Si l'usuari/ària compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.
      // Promoció 2: Quan es compren 10 o més productes per a fer pastís, el seu preu es rebaixa a 2/3.
      
      if (product.name === 'cooking oil' && quantity >= 3) {
        product.subtotalWithDiscount = 10 * quantity;
      } else {
        if (product.type === 'grocery' && DescompteGrocery == true) {
          product.subtotalWithDiscount = (2 / 3) * quantity * price;
        }
        else {
          product.subtotalWithDiscount = quantity * price;
        }
      }
    }
  }
    
  // Exercise 6
  function printCart() {
    console.log('estic a printCart, i cart= ' + cart)
    const modal = document.getElementById('cartModal');
    const tableBody = document.getElementById('cart_list');
    const total_price = document.getElementById('total_price');
    // Esborra el contingut de la taula
    tableBody.innerHTML = ''
    total_price.innerHTML = totalCarro.toFixed(2)
  
    // Itera sobre cada producte en el carret
    for (const product of cart) {
      const row = document.createElement('tr');
  
      // Crea les cel·les per a cada propietat del producte
      const productNameCell = document.createElement('th');
      const productPriceCell = document.createElement('td');
      const productQuantityCell = document.createElement('td');
      const productTotalCell = document.createElement('td');
  
      // Assigna els valors de cada propietat a les cel·les
      productNameCell.textContent = product.name;
      productPriceCell.textContent = product.price.toFixed(2) + ' €';
      //productPriceCell.textContent = `${product.price.toFixed(2)} €`;
      productQuantityCell.textContent = product.quantity;
      //productTotalCell.textContent = `${(product.price * product.quantity).toFixed(2)} €`;
      //productTotalCell.textContent = product.quantity * product.price
      productTotalCell.textContent = product.subtotalWithDiscount.toFixed(2)
      console.log('montando el printCart ' + product.subtotalWithDiscount)
      
      // Afegeix les cel·les a la fila
      row.appendChild(productNameCell);
      row.appendChild(productPriceCell);
      row.appendChild(productQuantityCell);
      row.appendChild(productTotalCell);
  
      // Afegeix la fila a la taula
      tableBody.appendChild(row);
    }
  
    // Mostra la finestra modal
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
  }
  

function open_modal() {
    console.log("Open Modal");
    generateCart() 
    printCart();
}
