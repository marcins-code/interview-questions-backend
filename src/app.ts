import express, { Application, Request, Response, NextFunction } from 'express';
// Boot express
const app: Application = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.json());
app.use('/', (req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({ data: 'Hello from Oranio AS' });
});

export default app;
