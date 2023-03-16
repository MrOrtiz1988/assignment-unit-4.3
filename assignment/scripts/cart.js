console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){ 
    if(basket.push(item)){
       console.log(basket);
    }
    return true;
}

console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log('Adding bananas (expect true)', addItem('bananas'));
console.log(`Basket is now ${basket}`);
console.log('Adding oranges (expect true)', addItem('oranges'));
console.log(`Basket is now ${basket}`);

function listItems(){
    for(input of basket){
        console.log(input);
    }
}

listItems();

function empty(){
    basket = [];
}

empty();

console.log(basket);

console.log('Adding pears (expect true)', addItem('pears'));
console.log(`Basket is now ${basket}`);
console.log('Adding grapes (expect true)', addItem('grapes'));
console.log(`Basket is now ${basket}`);
console.log('Adding cherries (expect true)', addItem('cherries'));
console.log(`Basket is now ${basket}`);


listItems();

const maxItems = 5;

function isFull(){
    if(basket.length < maxItems){
        return false;
    }
    return true;
}

console.log('is basket full? should say false', isFull());

console.log('Adding peaches (expect true)', addItem('peaches'));
console.log(`Basket is now ${basket}`);
console.log('Adding mango (expect true)', addItem('mango'));
console.log(`Basket is now ${basket}`);

console.log('is basket full? should say true', isFull());
