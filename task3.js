function find (array, value){
  console.log(array.indexOf(value));
}

let products = ['Milk', 'Apple', 'Salt', 'Pasta', 'Sugar', 'Coconout'];
find(products, 'Sugar');
find(products, 'Coconout');
find(products, 'Paasta');
