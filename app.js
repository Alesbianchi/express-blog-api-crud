const express = require('express');
const app = express()
const port = 3000


// importo il file delle rotte
const postsRouter = require('./router/posts');

// importo il middleware
const errorHandlers = require('./middlewares/errorHandlers');



//definisco la cartella per i file statici
app.use(express.static('pubblic'));



//registro il body parser
app.use(express.json());


//definisco la rotta home
app.get('/', (req, res) => {
    res.send("Server del mio blog");
})


//utilizziamo la rotta dei blog andando a definire la parte iniziale delle rotte
app.use("/posts", postsRouter);

//autorizzo il middleware
app.use(errorHandlers);



//avvio del server sulla porta indicata
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
    
})