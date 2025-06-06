var DataTypes = require("sequelize").DataTypes;
var _episodios = require("./episodios");
var _series = require("./series");

function initModels(sequelize) {
  var episodios = _episodios(sequelize, DataTypes);
  var series = _series(sequelize, DataTypes);

  episodios.belongsTo(series, { as: "id_serie_sery", foreignKey: "id_serie"});
  series.hasMany(episodios, { as: "episodios", foreignKey: "id_serie"});

  return {
    episodios,
    series,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
