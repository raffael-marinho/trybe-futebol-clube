import Matches from '../../database/models/Matches';
import Teams from '../../database/models/Teams';
import LeaderboardModel from '../../ultils/Leaderboard';

function filterLeaderboard2(a: LeaderboardModel, b: LeaderboardModel) {
  if (a.goalsBalance < b.goalsBalance) {
    return 1;
  }
  if (a.goalsFavor > b.goalsFavor) {
    return -1;
  }
  if (a.goalsFavor < b.goalsFavor) {
    return 1;
  }
  if (a.goalsOwn > b.goalsOwn) {
    return -1;
  }
  if (a.goalsOwn < b.goalsOwn) {
    return 1;
  }
  return 0;
}

function filterLeaderboard(array: LeaderboardModel[]) {
  const result = array.sort((a, b) => {
    if (a.totalPoints > b.totalPoints) {
      return -1;
    }
    if (a.totalPoints < b.totalPoints) {
      return 1;
    }
    if (a.totalVictories > b.totalVictories) {
      return -1;
    }
    if (a.totalVictories < b.totalVictories) {
      return 1;
    }
    if (a.goalsBalance > b.goalsBalance) { return -1; }
    return filterLeaderboard2(a, b);
  });
  return result;
}

export default class LeaderboardService {
  public getAllMatchsHome = async () => {
    const leaderboard: LeaderboardModel[] = [];
    const teams = await Teams.findAll();
    const matches = await Matches.findAll({
      where: { inProgress: false },
      include: [{ model: Teams, as: 'teamHome', attributes: ['teamName'] }, {
        model: Teams, as: 'teamAway', attributes: ['teamName'],
      }],
    });
    teams.forEach((team) => {
      const teamLeaderboard = new LeaderboardModel(team.teamName);
      teamLeaderboard.setLeader(matches);
      leaderboard.push(teamLeaderboard);
    });
    return filterLeaderboard(leaderboard);
  };

  public getAllMatchsAway = async () => {
    const leaderboard: LeaderboardModel[] = [];
    const teams = await Teams.findAll();
    const matches = await Matches.findAll({
      where: { inProgress: false },
      include: [{ model: Teams, as: 'teamHome', attributes: ['teamName'] }, {
        model: Teams, as: 'teamAway', attributes: ['teamName'],
      }],
    });
    teams.forEach((team) => {
      const teamLeaderboard = new LeaderboardModel(team.teamName);
      teamLeaderboard.setLeader2(matches);
      leaderboard.push(teamLeaderboard);
    });
    return filterLeaderboard(leaderboard);
  };

  public getAllMatchs = async () => {
    const leaderboard: LeaderboardModel[] = [];
    const teams = await Teams.findAll();
    const matches = await Matches.findAll({
      where: { inProgress: false },
      include: [{ model: Teams, as: 'teamHome', attributes: ['teamName'] }, {
        model: Teams, as: 'teamAway', attributes: ['teamName'],
      }],
    });
    teams.forEach((team) => {
      const teamLeaderboard = new LeaderboardModel(team.teamName);
      teamLeaderboard.setLeader3(matches);
      leaderboard.push(teamLeaderboard);
    });
    return filterLeaderboard(leaderboard);
  };
}
