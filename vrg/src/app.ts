import express from 'express';

class App {
  public app: express.Application;
  public port: number | string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middleware();
    this.router();
  }

  public middleware(): void {
    const { app } = this;
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
  }

  public router(): void {
    const { app } = this;
    this.testApi();
  }

  public testApi(): void {
    const { app } = this;
    app.get('/test', (req, res) => {
      res.status(200);
      res.json({
        data: "Hello, /test!"
      });
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Listening to ${this.port}...`);
    });
  }
}

export default new App();
