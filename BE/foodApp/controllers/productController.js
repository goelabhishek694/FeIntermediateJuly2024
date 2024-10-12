const ProductModel = require("../models/product");

exports.createProduct = async (req, res) => {
    const {body} = req;

    const product = await ProductModel.create({
        product_name: body.productName,
        product_price: body.productPrice,
        isInStock: body.isInStock,
        category: body.category
    })

    console.log(product);
    
    return res.status(201).json({"message":"Product Created", product})

}

exports.getAllProducts = async (req, res) => {

    const allProducts = await ProductModel.find();
    // const allProducts = await ProductModel.findOne();
    // const allProducts = await ProductModel.find({product_price:{ $gte : 10, $lte: 200}});

    console.log("hello", allProducts);
    
    return res.status(201).json({"message":"Product Retrieved", allProducts})

}

exports.getProductById = async (req, res) => {

    const {id} = req.params;
    console.log(id);
    
    const product = await ProductModel.findById(id)

    console.log(product);
    
    return res.status(200).json({"message":"Product Retrieved by ID", product})

}

exports.updateProduct = async (req, res) => {

    const {id} = req.params;
    const {body} = req;
    console.log(body);
    console.log(id);
    
    const product = await ProductModel.findByIdAndUpdate(id, body, {returnDocument:'after'})

    console.log(product);
    
    return res.status(200).json({"message":"Product updated", product})

}

exports.deleteProduct = async (req, res) => {
    const {id} = req.params;
    
    const productToBeDeleted = await ProductModel.findByIdAndDelete(id);
    console.log(productToBeDeleted);

    return res.status(200).json({message:"Product deleted"})
    
}