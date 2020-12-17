const mongoose = require('mongoose');
const express = require('express');
const { authT } = require('./middleware/auth')

/// configuración de express
const app = express();
const port = process.env.PORT || 3000;


// MIDDLEWARE
const morgan = require('morgan');
app.use(morgan('tiny'));
app.use(express.json());

// ROUTES
const car = require('./routes/cars.route');
app.use('/api/cars', car);
const user = require('./routes/users.route');
app.use('/api/users', user);
const company = require('./routes/company.route');
app.use('/api/companies', company);
const sale = require('./routes/sales.route');
app.use('/api/sales', authT, sale);
const auth = require('./routes/auth.route');
app.use('/api/auth', auth)

// HOME DIRECTORY 
app.get('/', (req, res) => {
    res.send('Its working')
})


/// SERVER LISTENING
app.listen(port, () => console.log('Escuchando a la people en el puerto: ' + port));

mongoose.connect('mongodb://localhost/carsdb', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Conectado a Mongosee con exito'))
    .catch(erro => console.log('Error en MongoDB: ', erro));