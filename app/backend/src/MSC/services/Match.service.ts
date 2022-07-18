import team from '../../database/models/Teams';
import Model from '../../database/models/Matches';
import { IGoals, IMatch, IMatchData } from '../../interfaces/Index';
import GenericError from '../../ultils/GenericError';

export default class Service {
  private model = Model;

  getAll = async (inProgress: boolean | undefined) => {
    const matches = await this.model.findAll({
      include: [
        { model: team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    const typedMatches = matches as unknown as IMatch[];

    if (inProgress !== undefined) {
      return typedMatches.filter((match: IMatch) => match.inProgress === inProgress);
    }
    return typedMatches;
  };

  create = async (matchData: IMatchData) => {
    const { homeTeam, awayTeam } = matchData;
    if (homeTeam === awayTeam) {
      throw new GenericError(401, 'It is not possible to create a match with two equal teams');
    }
    const homeTeamExists = await this.model.findOne({ where: { id: homeTeam } });
    const awayTeamExists = await this.model.findOne({ where: { id: awayTeam } });

    if (!homeTeamExists || !awayTeamExists) {
      throw new GenericError(404, 'There is no team with such id!');
    }
    const match = await this.model.create({ ...matchData });

    return match;
  };

  finish = async (id: number) => {
    await this.model.update({
      inProgress: false,
    }, { where: { id } });
  };

  goalsUpdate = async (id: number, goals: IGoals) => {
    const inProgress = await this.model.findOne({ where: { id, inProgress: true } });
    if (!inProgress) {
      throw new GenericError(400, 'This match is not in progress.');
    }
    await this.model.update(goals, { where: { id } });
  };
}
