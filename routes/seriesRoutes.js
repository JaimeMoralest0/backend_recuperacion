const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesController');

router.get('/estadisticas/por-mes', seriesController.getSeriesPorMes); // primero
router.get('/', seriesController.getAllSerie); 
router.get('/:id', seriesController.getSerieById);
router.put('/:id', seriesController.updateSerie);
router.delete('/:id', seriesController.deleteSerie);
router.get('/filtro/genero', seriesController.getSeriesByGenero);
router.get('/filtro/fecha', seriesController.getSeriesByFecha);

module.exports = router;
