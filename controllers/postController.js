// importo idati
const posts = require('../data/posts');


function index(req, res) {
   //res.send('Lista delle pizze');
   //Inizialmente, il blog filtrato corrisponde a quello originale
   let filteredPost = posts;

   // Se la richiesta contiene un filtro, allora filtriamo il blog
   if (req.query.ingredient) {
       filteredPost = post.filter(
           post => post.list.includes(req.query.list)
       );
   }

   // restituiamo la variabile filteredPost
   // potrebbe essere stata filtrata o contenere il blog originale
   res.json(filteredPost);
    
}

function destroy(req, res) {
    res.send('Eliminazione della pizza ' + req.params.id);
}

function show(req, res) {
    res.send('Dettagli della pizza ' + req.params.id);
}

function update(req, res) {
    // copiamo la logica dell'update
}


function store(req, res) {
    // copiamo la logica della store
}

function update(req, res) {
    // copiamo la logica dell'update
}

// esportiamo tutto
module.exports = { index, show, store, update, destroy }