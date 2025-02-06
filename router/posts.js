//importo express e utilizzo la parte di routing
const express = require('express');
const router = express.Router();


//rotta CRUD dei post
// index
router.get('/', function (req, res) {
  res.send('Lista dei blog');
});

// show
router.get('/:id', function (req, res) {
  res.send('Dettagli del blog ' + req.params.id);
});

// store
router.post('/', function (req, res) {
  res.send('Creazione nuovo blog');
});

// update
router.put('/:id', function (req, res) {
  res.send('Modifica integrale del blog ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
  res.send('Modifica parziale del blog ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
  res.send('Eliminazione del blog ' + req.params.id);
});

// esporto router
module.exports = router;