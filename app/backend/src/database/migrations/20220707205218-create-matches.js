'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      homeTeam: {
        type: Sequelize.INTEGER,
        field: 'home_team',
        references: {
          model: 'teams',
          key: 'id',
        }
      },
      homeTeamGoals: {
        type: Sequelize.INTEGER,
        field: 'home_team_goals'
      },
      awayTeam: {
        type: Sequelize.INTEGER,
        field: 'away_team',
        references: {
          model: 'teams',
          key: 'id',
        }
      },
      awayTeamGoals: {
        type: Sequelize.INTEGER,
        field: 'away_team_goals'
      },
      inProgress: {
        type: Sequelize.BOOLEAN,
        field: 'in_progress'
      },
    },
    { timestamps: false }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};