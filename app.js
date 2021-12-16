//require mongoose and our fruits schema
//require dotenv to load custom environmental variables from .env file

//dependencies

const mongoose = require("mongoose");
const Fruit = require("./fruit.js");
require("dotenv").config();

// tell Mongoose where to connect with Mongo and have it connect with the sub-database fruits (if it doesn't exist, it will be created)
// set mongoose.connection to a shorter variable name

//global config
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

//connect to mongo

mongoose.connect(
  mongoURI,
  {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  },
  () => {
    console.log("connection with MongoDB is established");
  }
);

//PROVIDE OPTIONAL err/success messages about the connections
// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is MongoDB not running?"));
db.on("connected", () => console.log("MongoDB connected on: ", mongoURI));
db.on("disconnected", () => console.log("MongoDB disconnected"));

// Automatically close after 5 seconds
// for demonstration purposes to see that you must use `db.close()` in order to regain control of Terminal tab
// setTimeout(() => {
// 	db.close();
// }, 5000);

//create an object to insert into the database

// const myFirstFruit = {
//     fruitName: 'Apple',
//     fruitType: 'Pome',
//     seeds: true,
// };

// Fruit.create(myFirstFruit, (error, fruit)=>{
//     if (error){
//         console.log(error)
//     }else {
//         console.log(fruit);
//     }
//     db.close();
// });

// const manyFruits = [
//   {
//     fruitName: "Plums",
//     fruitType: "Drupes",
//     seeds: false,
//   },
//   {
//     fruitName: "Peaches",
//     fruitType: "Drupes",
//     seeds: false,
//   },
//   {
//     fruitName: "Olives",
//     fruitType: "Drupes",
//     seeds: false,
//   },
//   {
//     fruitName: "Tomatoes",
//     fruitType: "Berries",
//     seeds: true,
//   },
//   {
//     fruitName: "Eggplants",
//     fruitType: "Berries",
//     seeds: true,
//   },
//   {
//     fruitName: "Grapes",
//     fruitType: "Drupes",
//     seeds: true,
//   },
//   {
//     fruitName: "Pears",
//     fruitType: "Pome",
//     seeds: true,
//   },
//   {
//     fruitName: "Lemons",
//     fruitType: "Hesperidium",
//     seeds: true,
//   },
//   {
//     fruitName: "Oranges",
//     fruitType: "Hesperidium",
//     seeds: true,
//   },
//   {
//     fruitName: "Cucumbers",
//     fruitType: "Pepos",
//     seeds: true,
//   },
//   {
//     fruitName: "Cantalopes",
//     fruitType: "Pepos",
//     seeds: true,
//   },
//   {
//     fruitName: "Squash",
//     fruitType: "Pepos",
//     seeds: true,
//   },

// ];

// Fruit.insertMany(manyFruits, (err, fruit)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(fruit);
//     }
//     db.close();
// });

// Fruit.find((err, fruit)=>{
//     console.log(fruit)
//     db.close();
// })

// Fruit.find({}, 'fruitName seeds', (err, fruit) =>{
//     console.log(fruit)
//     db.close();
// })

// Fruit.find({ fruitName: 'Apple'}, (err, fruit)=>{
//     console.log(fruit);
//     db.close();
// });

// Fruit.find({seeds: true }, (err, fruit)=>{
//     console.log(fruit);
//     db.close();
// });

// Fruit.find({seeds: false}, (err, fruit)=>{
//     console.log(fruit);
//     db.close();
// });

// Fruit.find({ seeds:true, fruitType: 'Pepos'})
//   .limit(6)
//   .sort('fruitName')
//   .exec((err, fruit) =>{
//       console.log(fruit);
//       db.close();
//   });