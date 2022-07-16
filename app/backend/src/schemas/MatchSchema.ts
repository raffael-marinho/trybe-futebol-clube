import * as joi from 'joi';

const schema = joi.object({
  homeTeam: joi.number().required(),
  awayTeam: joi.number().required(),
  homeTeamGoals: joi.number().required(),
  awayTeamGoals: joi.number().required(),
});

export default schema;
