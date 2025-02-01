// Objects are containers for Properties and Methods.
// Properties are named Values.
// Methods are Functions stored as Properties.

item = {
 name : "Ear Buds",
 price: 1000,
 quantity: 5,
 get_total_price: function(){
    return this.quantity * this.price   // 'this' points to the properties of current object 
 }
}
//console.log(item)  // prints the entire obj
//console.log(item.name)
console.log("Total price: ",item.get_total_price())