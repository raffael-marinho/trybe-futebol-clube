// import * as cors from 'cors';
import * as express from 'express';
import error from './middlewares/ErrorMiddleware';
// import User from './routers/UserRouter';
// import Team from './routers/TeamRouter';
// import Match from './routers/MatchRouter';
import routes from './routers';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    // this.app.use(cors());
    this.app.use(accessControl);
    // this.app.use(User);
    // this.app.use(Team);
    // this.app.use(Match);
    this.app.use(routes);
    this.app.use(error);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
