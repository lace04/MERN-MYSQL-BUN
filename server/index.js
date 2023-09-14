import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(indexRoutes);
app.use(tasksRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('MERN Stack Boilerplate with Bun');
});

export default app;
