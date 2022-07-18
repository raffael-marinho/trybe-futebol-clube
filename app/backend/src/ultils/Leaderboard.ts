export function own(obj: any, local:string) {
  if (local === 'awayMatches') {
    return obj[local].reduce((goals: any, cGoals: any) =>
      goals + cGoals.homeTeamGoals, 0);
  }
  return obj[local].reduce((goals: any, cGoals: any) =>
    goals + cGoals.awayTeamGoals, 0);
}

export function favor(obj: any, local:string) {
  if (local === 'awayMatches') {
    return obj[local].reduce((goals: any, cGoals: any) =>
      goals + cGoals.awayTeamGoals, 0);
  }
  return obj[local].reduce((goals: any, cGoals: any) =>
    goals + cGoals.homeTeamGoals, 0);
}

export function draws(obj: any, local:string) {
  return obj[local].reduce((goals: any, cGoals: any) => {
    let draw = goals;
    if (cGoals.homeTeamGoals === cGoals.awayTeamGoals) draw += 1;

    return draw;
  }, 0);
}

export function loses(obj: any, local:string) {
  if (local === 'awayMatches') {
    return obj[local].reduce((goals: any, cGoals: any) => {
      let total = goals;
      if (cGoals.awayTeamGoals < cGoals.homeTeamGoals) total += 1;
      return total;
    }, 0);
  }
  return obj[local].reduce((goals: any, cGoals: any) => {
    let total = goals;
    if (cGoals.homeTeamGoals < cGoals.awayTeamGoals) total += 1;
    return total;
  }, 0);
}

export function victories(obj: any, local:string) {
  if (local === 'awayMatches') {
    return obj[local].reduce((goals: any, cGoals: any) => {
      let total = goals;
      if (cGoals.awayTeamGoals > cGoals.homeTeamGoals) total += 1;
      return total;
    }, 0);
  }
  return obj[local].reduce((goals: any, cGoals: any) => {
    let total = goals;
    if (cGoals.homeTeamGoals > cGoals.awayTeamGoals) total += 1;
    return total;
  }, 0);
}

export function totalPoints(obj: any, local:string) {
  if (local === 'awayMatches') {
    return obj[local].reduce((goals: any, cGoals: any) => {
      let total = goals;
      if (cGoals.homeTeamGoals < cGoals.awayTeamGoals) total += 3;
      if (cGoals.homeTeamGoals === cGoals.awayTeamGoals) total += 1;
      return total;
    }, 0);
  }
  return obj[local].reduce((goals: any, cGoals: any) => {
    let total = goals;
    if (cGoals.homeTeamGoals > cGoals.awayTeamGoals) total += 3;
    if (cGoals.homeTeamGoals === cGoals.awayTeamGoals) total += 1;
    return total;
  }, 0);
}

export function sortLeaderboard(matches: any) {
  return matches.sort((a: any, b: any) =>
    b.totalPoints - a.totalPoints
        || b.totalVictories - a.totalVictories
        || b.goalsBalance - a.goalsBalance
        || b.goalsFavor - a.goalsFavor
        || b.goalsOwn - a.goalsOwn);
}
