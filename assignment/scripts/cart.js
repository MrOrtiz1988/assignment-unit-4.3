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

//adding 3 new items and logging it
console.log('Adding pears (expect true)', addItem('pears'));
console.log(`Basket is now ${basket}`);
console.log('Adding grapes (expect true)', addItem('grapes'));
console.log(`Basket is now ${basket}`);
console.log('Adding cherries (expect true)', addItem('cherries'));
console.log(`Basket is now ${basket}`);

//callin listItems to test, only the 3 new items should list
listItems();

//checking if basket is full
console.log('is basket full? should say false', isFull());

//adding 2 more items and logging it
console.log('Adding peaches (expect true)', addItem('peaches'));
console.log(`Basket is now ${basket}`);
console.log('Adding mango (expect true)', addItem('mango'));
console.log(`Basket is now ${basket}`);

//checking again if basket is full, which after the last 2 add ons
//it is so it should return true
console.log('is basket full? should say true', isFull());

//adding a sixth item to test if it will add
console.log('Adding melon (expect false)', addItem('melon'));
console.log(`Basket is now ${basket}`);
//as expected, melon will not be added and basket remains the same
//because isFull will now return true and addItem will prevent the
//add on

function removeItem(item, array){
    let itemSearched = array.indexOf(item);
    if(itemSearched == -1 || undefined){
        return null;
    } 
    let itemTakenOut = array.splice(itemSearched, 1);
    return itemTakenOut;
}

//removing mango
console.log('Removed', removeItem('mango', basket), `Basket is now ${basket}`);
//going to try to remove item that does not exist, expected output is null
console.log('Removed', removeItem('turnips', basket), `Basket is still ${basket}`);
//item was not found in array therefore returned null