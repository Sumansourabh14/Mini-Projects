const receiptDiv = document.querySelector('#receipt');

//Function that displays individual items and total price of the cart items
function cartTotal(cartArray = [
    {name:"Apple", price: 4, quantity: 2}, 
    {name:"Orange", price: 3, quantity: 3}, 
    {name:"Guava", price: 5, quantity: 2}, 
    {name:"Mango", price: 4, quantity: 6},
    {name:"Cherry", price: 14, quantity: 2}
]) {
    // Clearing the existing content
    receiptDiv.innerHTML = '';

    let totalPrice = 0;
    cartArray.forEach(function (item) {
        totalPrice += (item.price * item.quantity);
        let individualPrice = (item.price * item.quantity);

        //Displaying the individual cart items on the document
        const newItem = document.createElement('div');
        newItem.textContent = `${item.name} $${item.price} * ${item.quantity} = $${individualPrice}`;
        receiptDiv.append(newItem);
    })

    //For displaying the total price
    const totalPriceDiv = document.createElement('div');
    totalPriceDiv.textContent = `Cart total = $${totalPrice}`;
    receiptDiv.append(totalPriceDiv);

    return totalPrice;
}

cartTotal();


