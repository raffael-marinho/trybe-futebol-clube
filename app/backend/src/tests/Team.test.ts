import * as sinon from 'sinon';
import * as chai from 'chai';
import { before } from 'mocha';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import model from '../database/models/Teams';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste de times', () => {
  // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSJ9LCJpYXQiOjE2NTcyNzY4NzksImV4cCI6MTgzMDA3Njg3OX0.h4R0Y-gAh_Q8SXPYhjw8KmPzJnAwdkPOWGtqaLtdb94'
  describe('Rota get /teams', () => {
    before(() => {
      sinon.stub(model, 'findAll').resolves([
        { id: 1, teamName: 'Avaí/Kindermann' },
        { id: 2, teamName: 'Bahia' }
      ] as any);
    })

    after(() => {
      (model.findAll as sinon.SinonStub).restore();
    })


    it("A rota get /teams deve retornar os times", async () => {
      const response = await chai.request(app)
        .get('/teams').then((res) => res)

      expect(response.body).to.deep.equal([
        { id: 1, teamName: 'Avaí/Kindermann' },
        { id: 2, teamName: 'Bahia' }
      ]);
    });
  });

  describe('Rota get /teams/:id', () => {
    before(() => {
      sinon.stub(model, 'findOne').resolves([
        { id: 1, teamName: 'Avaí/Kindermann' },
      ] as any);
    })

    after(() => {
      (model.findOne as sinon.SinonStub).restore();
    })


    it("A rota get /teams/:id deve retornar o time com o id", async () => {
      const response = await chai.request(app)
        .get('/teams/1').then((res) => res)

      expect(response.body).to.deep.equal([{ id: 1, teamName: 'Avaí/Kindermann' }]);
    });
  });
});