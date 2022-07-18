import * as sinon from 'sinon';
import * as chai from 'chai';
import { before } from 'mocha';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import model from '../database/models/Matches';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste de matches', () => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSJ9LCJpYXQiOjE2NTcyNzY4NzksImV4cCI6MTgzMDA3Njg3OX0.h4R0Y-gAh_Q8SXPYhjw8KmPzJnAwdkPOWGtqaLtdb94'
  describe('Rota get /matches', () => {
    before(() => {
      sinon.stub(model, 'findAll').resolves([
        {
        id:1,
        homeTeam:16,
        homeTeamGoals:1,
        awayTeam:8,
        awayTeamGoals:1,
        inProgress:false,
        teamHome:{teamName:"São Paulo"},
        teamAway:{teamName:"Grêmio"}},
      ] as any);
    })

    after(() => {
      (model.findAll as sinon.SinonStub).restore();
    })


    it("A rota get /matches deve retornar os times", async () => {
      const response = await chai.request(app)
        .get('/matches').then((res) => res)

      expect(response.body).to.deep.equal([
        {
          id:1,
          homeTeam:16,
          homeTeamGoals:1,
          awayTeam:8,
          awayTeamGoals:1,
          inProgress:false,
          teamHome:{teamName:"São Paulo"},
          teamAway:{teamName:"Grêmio"}
        },
      ]);
    });
  });
  describe('Rota get /matches?inProgress=false', () => {
    before(() => {
      sinon.stub(model, 'findAll').resolves([
        {
        id:1,
        homeTeam:16,
        homeTeamGoals:1,
        awayTeam:8,
        awayTeamGoals:1,
        inProgress:false,
        teamHome:{teamName:"São Paulo"},
        teamAway:{teamName:"Grêmio"}},
      ] as any);
    })

    after(() => {
      (model.findAll as sinon.SinonStub).restore();
    })


    it("A rota get /matches?inProgress=true deve retornar os times", async () => {
      const response = await chai.request(app)
        .get('/matches').then((res) => res)

      expect(response.body).to.deep.equal([
        {
          id:1,
          homeTeam:16,
          homeTeamGoals:1,
          awayTeam:8,
          awayTeamGoals:1,
          inProgress:false,
          teamHome:{teamName:"São Paulo"},
          teamAway:{teamName:"Grêmio"}
        },
      ]);
    });
  });
  describe('Rota get /matches?inProgress=true', () => {
    before(() => {
      sinon.stub(model, 'findAll').resolves([
        {
        id:1,
        homeTeam:16,
        homeTeamGoals:1,
        awayTeam:8,
        awayTeamGoals:1,
        inProgress:true,
        teamHome:{teamName:"São Paulo"},
        teamAway:{teamName:"Grêmio"}},
      ] as any);
    })

    after(() => {
      (model.findAll as sinon.SinonStub).restore();
    })


    it("A rota get /matches?inProgress=true deve retornar os times", async () => {
      const response = await chai.request(app)
        .get('/matches').then((res) => res)

      expect(response.body).to.deep.equal([
        {
          id:1,
          homeTeam:16,
          homeTeamGoals:1,
          awayTeam:8,
          awayTeamGoals:1,
          inProgress:true,
          teamHome:{teamName:"São Paulo"},
          teamAway:{teamName:"Grêmio"}
        },
      ]);
    });
  });
  describe('Rota post /matches', () => {  
    it("A rota post /matches deve retornar um erro de token", async () => {
      const response = await chai.request(app)
        .post('/matches')
        .set("Authorization", "Esse num passa nem com milagre")
        .send({
          homeTeam: 16, 
          awayTeam: 8, 
          homeTeamGoals: 2,
          awayTeamGoals: 2
        }).then((res) => res)

      expect(response.body).to.be.deep.equal({message: 'Token must be a valid token'})

    });

    it("A rota post /matches deve retornar 'homeTeam is required'", async () => {
      const response = await chai.request(app)
        .post('/matches')
        .set("Authorization", token)
        .send({
          awayTeam: 8, 
          homeTeamGoals: 2,
          awayTeamGoals: 2
        }).then((res) => res)

      expect(response.body).to.be.deep.equal({message: "\"homeTeam\" is required"})

    });
    it("A rota post /matches deve retornar 'awayTeam is required'", async () => {
      const response = await chai.request(app)
        .post('/matches')
        .set("Authorization", token)
        .send({
          homeTeam: 1,
          homeTeamGoals: 2,
          awayTeamGoals: 2
        }).then((res) => res)

      expect(response.body).to.be.deep.equal({message: "\"awayTeam\" is required"})

    });
  });
});