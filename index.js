const mongoose = require('mongoose');
const express = require('express');


/// configuración de express
const app = express();
const port = process.env.PORT || 3000;


// MIDDLEWARE
const morgan = require('morgan');
app.use(morgan('tiny'));
app.use(express.json());

// ROUTES
const car = require('./routes/cars.routes');
app.use('/api/cars', car);


// HOME DIRECTORY
app.get('/', (req, res) => {
    res.send('Its working')
})


/// SERVER LISTENING
app.listen(port, () => console.log('Escuchando a la people en el puerto: ' + port));

mongoose.connect('mongodb://localhost/carsdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a Mongosee con exito'))
    .catch(erro => console.log('Error en MongoDB: ', erro));