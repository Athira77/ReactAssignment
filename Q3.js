let order = {
    id : 'a1W',
    title : "Wall Poster",
    price : 5000,
    printOrder: function () {
        alert(`Oder Details are: \n Id: ${this.id} \n Title: ${this.title} \n Price: ${this.price}`);
    },
    getPrice: function () {
        alert(`Price is: ${this.price}`);
    }
};

let myOrder =  Object.assign({}, order);
console.log(myOrder);