'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  matches.init({
    homeTeam: DataTypes.NUMBER,
    homeTeamGoals: DataTypes.NUMBER,
    awayTeam: DataTypes.NUMBER,
    awayTeamGoals: DataTypes.NUMBER,
    inProgress: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'matches',
  });
  return matches;
};