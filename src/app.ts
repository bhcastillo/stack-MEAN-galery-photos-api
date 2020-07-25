import express from 'express';
import path from 'path';
import morgan from 'morgan';
import routes from './routes/routes';
const app = express();
//settings
app.set('port', process.env.PORT);
//middelwares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api', routes);

// this folder for this apllication will be used to store public files
app.use('uploads', express.static(path.resolve('uploads')));
export default app;
