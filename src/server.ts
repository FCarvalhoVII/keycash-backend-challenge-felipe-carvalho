import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import routes from './routes';
import swaggerDocs from '../swagger.json';
import connectToDatabase from './database';

import 'dotenv/config';

const app = express();
const { API_PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routes);

connectToDatabase().then(() => {
    app.listen(API_PORT, () => console.log(`Server is running in PORT=${API_PORT}...`));
});