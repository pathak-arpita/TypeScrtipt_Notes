const product:{
    name:string,
    price:number,
    description:{
        brand:string,
        star :string
    }
}= {
    name: 'Laptop',
    price: 50000,
    description: {
        brand : 'hp',
        star : "⭐⭐⭐⭐⭐"
    }  
}

console.log(product.description.star);
console.log(product.name);