const express = require('express');
const morgan = require('morgan');
const yaml = require('yamljs');
const cors = require('cors');

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerjson = require('./swagger/swagger.json');
const swaggeryaml = yaml.load('./swagger/swagger.yaml');

const indexRouter =  require('./routes');


app.set('port', process.env.PORT || 11220);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use( '/', indexRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggeryaml));

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {}; 
    res.status(err.status || 500);
    res.send('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});
