export interface IUser {
  username: string,
  email: string,
  role: string,
  password: string
}

export type ILogin = Omit<IUser, 'role' | 'username' >;

export type IJWT = Omit<IUser, 'password'>;

export type IToken = {
  role: string,
  username: string,
  email: string
};

export type ITokenData = {
  data: IToken
};

export type IMatch = {
  id: number,
  homeTeam: number,
  homeTeamGoals: number,
  awayTeam: number,
  awayTeamGoals: number,
  inProgress: boolean,
  teamHome: {
    teamName: string
  },
  teamAway: {
    teamName: string
  }
};

export type IMatchData = Omit<IMatch, 'id' | 'teamHome' | 'teamAway'>;

export type IGoals = {
  homeTeamGoals: number,
  awayTeamGoals: number,
};
