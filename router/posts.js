//importo express e utilizzo la parte di routing
const express = require('express');
const router = express.Router();

// importo le funzioni del controller
const postController = require('../controllers/postController');


//rotta CRUD dei post
// index
router.get('/', postController.index); 

// show
router.get('/:id', postController.show); 

// destroy
router.delete('/:id', postController.destroy);

// store
router.post('/', postController.store);
  


// update
router.put('/:id', function (req, res) {
  res.send('Modifica integrale del blog ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
  res.send('Modifica parziale del blog ' + req.params.id);
});



// esporto router
module.exports = router;