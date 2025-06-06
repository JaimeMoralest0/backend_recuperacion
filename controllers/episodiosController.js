  // episodiosController.js
const Respuesta = require("../utils/respuesta.js");
const { logMensaje } = require("../utils/logger.js");
const initModels = require("../models/init-models.js").initModels;
const sequelize = require("../config/sequelize.js");

const models = initModels(sequelize);
const Episodio = models.episodios;

class EpisodioController {
  async createEpisodio(req, res) {
    const episodio = req.body;
    try {
      const nuevo = await Episodio.create(episodio);
      res.status(201).json(Respuesta.exito(nuevo, "Episodio insertado"));
    } catch (err) {
      logMensaje("Error :" + err);
      res.status(500).json(Respuesta.error(null, `Error al crear un episodio: ${episodio}`));
    }
  }

  async getAllEpisodio(req, res) {
    try {
      const data = await Episodio.findAll();
      res.json(Respuesta.exito(data, "Datos de episodios recuperados"));
    } catch (err) {
      res.status(500).json(Respuesta.error(null, `Error al recuperar episodios: ${req.originalUrl}`));
    }
  }

  async getEpisodioById(req, res) {
    const idepisodio = req.params.idepisodio;
    try {
      const fila = await Episodio.findByPk(idepisodio);
      if (fila) {
        res.json(Respuesta.exito(fila, "Episodio recuperado"));
      } else {
        res.status(404).json(Respuesta.error(null, "Episodio no encontrado"));
      }
    } catch (err) {
      logMensaje("Error :" + err);
      res.status(500).json(Respuesta.error(null, `Error al recuperar el episodio: ${req.originalUrl}`));
    }
  }

  async updateEpisodio(req, res) {
  const id = req.params.id; // ← obtenemos el id desde la URL
  const datos = req.body;   // ← datos nuevos para actualizar

  try {
    const numFilas = await Episodio.update(datos, { where: { id } });

    if (numFilas[0] === 0) {
      res.status(404).json(Respuesta.error(null, "No encontrado o no modificado: " + id));
    } else {
      res.status(200).json(Respuesta.exito(null, "Episodio actualizado correctamente"));
    }
  } catch (err) {
    logMensaje("Error :" + err);
    res.status(500).json(Respuesta.error(null, `Error al actualizar el episodio: ${req.originalUrl}`));
  }
}
  async deleteEpisodio(req, res) {
    const id = req.params.id;
    try {
      const numFilas = await Episodio.destroy({ where: { id } });
      if (numFilas == 0) {
        res.status(404).json(Respuesta.error(null, "No encontrado: " + id));
      } else {
        res.status(204).send();
      }
    } catch (err) {
      logMensaje("Error :" + err);
      res.status(500).json(Respuesta.error(null, `Error al eliminar el episodio: ${req.originalUrl}`));
    }
  }
}

module.exports = new EpisodioController();
