var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({[item]: Math.floor(Math.random()*100)});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if(!cart.length){
    console.log("Your shopping cart is empty.");
  } else {
    var stringArray = []; var item = ""; var cost = "";
    for(var i=0; i<cart.length; i++){
      item = Object.keys(cart[i]);
      cost = cart[i][item];
      stringArray.push(`${item} at $${cost}`);
    }
    if(cart.length==1){
      console.log(`In your cart, you have ${stringArray[0]}.`);
    } else if(cart.length==2){
      console.log(`In your cart, you have ${stringArray[0]} and ${stringArray[1]}.`);
    } else {
      stringArray[stringArray.length-1] = `and ${stringArray[stringArray.length-1]}`;
      console.log(`In your cart, you have ${stringArray.join(", ")}.`);
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
