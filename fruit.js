const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const fruitSchema = new Schema (
    {
        fruitName: String,
        fruitType: String,
        seeds: Boolean,
    },
    {timestamps: true}
)

const Fruit = mongoose.model('fruit', fruitSchema);

module.exports = Fruit;