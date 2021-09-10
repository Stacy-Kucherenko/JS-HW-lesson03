let styles =['Jazz', 'Blues'];
styles.push('Rock&Roll');
console.log(styles);

styles.splice(-2,1, 'Classic');
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift('Rap', 'Reggi')
console.log(styles);