import { DataTypes, Model } from 'sequelize';

import db from '.';

class Team extends Model {
  id: number;
  teamName: string;
}

Team.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { modelName: 'teams', sequelize: db, timestamps: false, underscored: true });

export default Team;
