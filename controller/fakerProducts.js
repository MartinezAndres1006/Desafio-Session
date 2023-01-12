const faker = require('faker')


class Product {
    constructor(name,price,image){
        this.name=name;
        this.price=price;
        this.image=image;
    }
}

const datos= (req,res)=>{


    const product = [];  
    for(let i = 0; i < 6; i++) {
        product.push(new Product(faker.commerce.productName(),faker.commerce.price(),faker.image.cats(200,200,true)))}
    
    
        res.render("index.ejs",{products:product})
    return response




}

module.exports= datos