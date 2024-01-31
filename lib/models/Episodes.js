import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
    seasons:{
        type: [String]
    },
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    video:{
        type: String,
        required: true
    },

}, { timestamps: true })

const Products = mongoose.models.Products || mongoose.model("Products", ProductsSchema);

export default Products;