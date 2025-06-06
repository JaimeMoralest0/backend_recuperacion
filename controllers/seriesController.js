const Respuesta = require("../utils/respuesta.js");
const { logMensaje } = require("../utils/logger.js");
const initModels = require("../models/init-models.js").initModels;
const sequelize = require("../config/sequelize.js");

const models = initModels(sequelize);
const Serie = models.series;

class SerieController {
  async createSerie(req, res) {
    const serie = req.body;
    try {
      const nueva = await Serie.create(serie);
      res.status(201).json(Respuesta.exito(nueva, "Serie insertada"));
    } catch (err) {
      logMensaje("Error: " + err);
      res.status(500).json(Respuesta.error(null, `Error al crear una serie: ${JSON.stringify(serie)}`));
    }
  }

  async getAllSerie(req, res) {
    try {
      const data = await Serie.findAll();
      res.json(Respuesta.exito(data, "Datos de series recuperados"));
    } catch (err) {
      logMensaje("Error: " + err);
      res.status(500).json(Respuesta.error(null, `Error al recuperar series: ${req.originalUrl}`));
    }
  }

  async getSerieById(req, res) {
    const id = req.params.id;
    try {
      const fila = await Serie.findByPk(id);
      if (fila) {
        res.json(Respuesta.exito(fila, "Serie recuperada"));
      } else {
        res.status(404).json(Respuesta.error(null, "Serie no encontrada"));
      }
    } catch (err) {
      logMensaje("Error: " + err);
      res.status(500).json(Respuesta.error(null, `Error al recuperar la serie: ${req.originalUrl}`));
    }
  }

  async updateSerie(req, res) {
    const id = req.params.id;
    const datos = req.body;

    try {
      const numFilas = await Serie.update(datos, { where: { id } });
      if (numFilas[0] === 0) {
        res.status(404).json(Respuesta.error(null, "No encontrado o no modificado: " + id));
      } else {
        res.status(200).json(Respuesta.exito(null, "Serie actualizada correctamente"));
      }
    } catch (err) {
      logMensaje("Error: " + err);
      res.status(500).json(Respuesta.error(null, `Error al actualizar la serie: ${req.originalUrl}`));
    }
  }

  async deleteSerie(req, res) {
    const id = req.params.id;
    try {
      const numFilas = await Serie.destroy({ where: { id } });
      if (numFilas === 0) {
        res.status(404).json(Respuesta.error(null, "No encontrado: " + id));
      } else {
        res.status(204).send();
      }
    } catch (err) {
      logMensaje("Error: " + err);
      res.status(500).json(Respuesta.error(null, `Error al eliminar la serie: ${req.originalUrl}`));
    }
  }

  async getSeriesByGenero(req, res) {
    const genero = req.query.genero?.toLowerCase() || "";

    try {
      const series = await Serie.findAll();
      const filtradas = series.filter((s) =>
        s.genero?.toLowerCase().includes(genero)
      );
      res.json(Respuesta.exito(filtradas, "Series filtradas por género"));
    } catch (err) {
      logMensaje("Error: " + err);
      res.status(500).json(Respuesta.error(null, "Error al filtrar por género"));
    }
  }

  async getSeriesByFecha(req, res) {
    const desde = req.query.desde;

    try {
      const todas = await Serie.findAll();
      const desdeDate = desde ? new Date(desde) : null;

      const filtradas = todas.filter((s) => {
        const fechaInicio = s.fecha_inicio ? new Date(s.fecha_inicio) : null;
        return !desdeDate || (fechaInicio && fechaInicio >= desdeDate);
      });

      res.json(Respuesta.exito(filtradas, "Series filtradas por fecha"));
    } catch (err) {
      logMensaje("Error: " + err);
      res.status(500).json(Respuesta.error(null, "Error al filtrar por fecha"));
    }
  }

  // ✅ NUEVO: Obtener número de series por mes (para la gráfica)
  async getSeriesPorMes(req, res) {
    try {
      const todas = await Serie.findAll();

      const conteoPorMes = {};

      todas.forEach((serie) => {
        if (serie.fecha_inicio) {
          const fecha = new Date(serie.fecha_inicio);
          const mes = fecha.getMonth(); // 0 (Enero) - 11 (Diciembre)
          conteoPorMes[mes] = (conteoPorMes[mes] || 0) + 1;
        }
      });

      const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ];

      const resultado = Object.entries(conteoPorMes).map(([mesNum, total]) => ({
        mes: meses[mesNum],
        total
      }));

      res.json(resultado);
    } catch (err) {
      logMensaje("Error: " + err);
      res.status(500).json(Respuesta.error(null, "Error al obtener series por mes"));
    }
  }
}

module.exports = new SerieController();
