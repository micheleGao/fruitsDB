const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// app.get('/', (req, res)=>{
//     res.send('got you! MOFO');
// })

// app.get('/:name', (req, res)=>{
//     res.send(`hello, ${req.params.name}`);
// })

const movies = require('./movies');
//middleware
//Middleware is just a function that transforms the request and/or the response object. Middleware functions get called in a series and each updates or transforms the request and/or the response object before passing them on to the next function in the series.
//By default, Express does not handle information posted from a form. In order to get form or JSON data in a POST request, we need to tell it to use some middleware – code that runs in between receiving the request and sending the response.

//add express.json to parse JSON
//the method .use sets up middle ware for the express appplication
app.use(express.json());
//this parses requests that may use a different content type
app.use(express.urlencoded({extended:true}));

// app.post('/', (req, res)=>{
    //     res.send(`hello, ${req.body.name}`)
    // });
    
    app.get('/movies', (req, res)=>{
        res.json(movies);
    });
    app.get('/movies/:id', (req, res)=>{
        // try{
        //     const singleMovie = findById(
        //         req.params.id,   
        //     );
        //     res.json(singleMovie)
        // }catch (error){
        //     console.log(error)
        // }
        const singleMovie = res.json(req.params.id)
        res.json(singleMovie)
       
    })
    // app.post('/movies', (req, res)=>{
    //     res.json(`${req.params.body}`)
    // })
    app.listen(PORT, ()=>{
        console.log('app listening on port:' + PORT);
    })