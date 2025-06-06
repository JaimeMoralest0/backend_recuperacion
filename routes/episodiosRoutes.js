// episodiosRoutes.js
const express = require('express');
const router = express.Router();
const episodiosController = require('../controllers/episodiosController');

router.get('/', episodiosController.getAllEpisodio);
router.get('/:idepisodio', episodiosController.getEpisodioById);
router.post('/', episodiosController.createEpisodio);
router.delete('/:id', episodiosController.deleteEpisodio);
router.put('/:id', episodiosController.updateEpisodio);

module.exports = router;

