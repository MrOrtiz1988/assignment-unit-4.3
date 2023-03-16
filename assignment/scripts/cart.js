console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const maxItems = 5;
let basket = [];

//isFull checks if there is room in the basket
function isFull(){
    if(basket.length < maxItems){
        return false;
    }
    return true;
}

//addItem adds item under the condition that isFull returns false
function addItem(item){ 
   
    if(isFull() === false){
        basket.push(item)
        return true;
    }
    return false;
}

//adding and logging 3 items in basket
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log('Adding bananas (expect true)', addItem('bananas'));
console.log(`Basket is now ${basket}`);
console.log('Adding oranges (expect true)', addItem('oranges'));
console.log(`Basket is now ${basket}`);

//listItems lists all items currently in basket
function listItems(){
    for(input of basket){
        console.log(input);
    }
}

//calling the listIems function
listItems();

//this function resets basket back to empty
function empty(){
    basket = [];
}

//calling the empty function basket should now be empty
empty();

//logging basket to test 
console.log('empty array is expected', basket);

console.log('Adding pears (expect true)', addItem('pears'));
console.log(`Basket is now ${basket}`);
console.log('Adding grapes (expect true)', addItem('grapes'));
console.log(`Basket is now ${basket}`);
console.log('Adding cherries (expect true)', addItem('cherries'));
console.log(`Basket is now ${basket}`);


listItems();

console.log('is basket full? should say false', isFull());

console.log('Adding peaches (expect true)', addItem('peaches'));
console.log(`Basket is now ${basket}`);
console.log('Adding mango (expect true)', addItem('mango'));
console.log(`Basket is now ${basket}`);

console.log('is basket full? should say true', isFull());

console.log('Adding melon (expect false)', addItem('melon'));
console.log(`Basket is now ${basket}`);