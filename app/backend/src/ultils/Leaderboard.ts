export default class LeaderboardModel {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
  constructor(name: string) {
    this.name = name;
    this.totalPoints = 0;
    this.totalGames = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.goalsBalance = 0;
    this.efficiency = 0;
  }

  totalPointsFunc = (homeTeamGoals: number, awayTeamGoals: number) => {
    if (homeTeamGoals > awayTeamGoals) {
      return 3;
    }
    if (homeTeamGoals === awayTeamGoals) {
      return 1;
    }
    return 0;
  };

  setLeader3(array: any[]) {
    this.setLeader(array);
    this.setLeader2(array);
  }

  setLeader2(array: any[]) {
    array.forEach((element) => {
      if (element.teamAway.teamName === this.name) {
        this.totalGames += 1;
        this.totalVictories += (element.awayTeamGoals > element.homeTeamGoals) ? 1 : 0;
        this.totalDraws += (element.awayTeamGoals === element.homeTeamGoals) ? 1 : 0;
        this.totalLosses += (element.awayTeamGoals < element.homeTeamGoals) ? 1 : 0;
        this.goalsFavor += element.awayTeamGoals;
        this.goalsOwn += element.homeTeamGoals;
        this.goalsBalance += element.awayTeamGoals - element.homeTeamGoals;
        this.totalPoints += this.totalPointsFunc(element.awayTeamGoals, element.homeTeamGoals);
      }
    });
    this.efficiency = +((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2);
  }

  setLeader(array: any[]) {
    array.forEach((element) => {
      if (element.teamHome.teamName === this.name) {
        this.totalGames += 1;
        this.totalVictories += (element.homeTeamGoals > element.awayTeamGoals) ? 1 : 0;
        this.totalDraws += (element.homeTeamGoals === element.awayTeamGoals) ? 1 : 0;
        this.totalLosses += (element.homeTeamGoals < element.awayTeamGoals) ? 1 : 0;
        this.goalsFavor += element.homeTeamGoals;
        this.goalsOwn += element.awayTeamGoals;
        this.goalsBalance += element.homeTeamGoals - element.awayTeamGoals;
        this.totalPoints += this.totalPointsFunc(element.homeTeamGoals, element.awayTeamGoals);
      }
    });
    this.efficiency = +((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2);
  }
}
