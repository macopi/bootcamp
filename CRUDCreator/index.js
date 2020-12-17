const fs = require('fs');
const fsPromises = require('fs/promises');
const readline = require("readline");
const prompt = require('prompt-sync')();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var singular = prompt('Singular');
var plural = prompt('Plural');
var controllerDir;
var servicesDir;
var modelsDir;
var routesDir;

async function comenzar() {
    console.log('** Creando Directorios');
    await sistemaCarpetas();
    console.log('*** Creados con Exito');

    console.log('Creando Modelo');
    crearModel();

    console.log('Creamos Routes');
    crearRoute();

    console.log('Creamos Controller');
    crearControllerGet();
    crearControllerGetAll();
    crearControllerPost();
    crearControllerUpdate();

    console.log('Creando Servicios');
    crearServicioGet();
    crearServicioGetAll();
    crearServicioPost();
    crearServicioUpdate();
    console.log('Creados con Exito');
}


async function sistemaCarpetas() {
    controllerDir = '../controllers/' + plural;
    servicesDir = '../services/' + plural;
    modelsDir = '../models';
    routesDir = '../routes';
    await fsPromises.mkdir('../controllers/' + plural, { recursive: true });
    await fsPromises.mkdir('../services/' + plural, { recursive: true });
    await fsPromises.mkdir('../models/', { recursive: true });
    await fsPromises.mkdir('../routes/', { recursive: true });
    return 'ok';
}

function crearModel() {
    let singularMayusculas = capitalize(singular);
    let pluralMayusculas = capitalize(plural);
    let contenido = `
    const mongoose = require('mongoose');    
    const ${singular}Schema = new mongoose.Schema({
        string: String
    })
    const ${singularMayusculas} = mongoose.model('${singular}', ${singular}Schema);
    module.exports = ${singularMayusculas};
    `
    fs.writeFile(modelsDir + '/' + plural + '.model.js', contenido, function(err) {
        if (err) throw err;
    });
}

function crearRoute() {
    let singularMayusculas = capitalize(singular);
    let pluralMayusculas = capitalize(plural);
    let contenido = `
    const express = require('express')
    const router = express.Router();

    /// IMPORTANCIÓN DE CONTROLADORES
    const { getAll${pluralMayusculas}Controller } = require('../controllers/${plural}/getAll${pluralMayusculas}.controller');
    const { createNew${singularMayusculas}Controller } = require('../controllers/${plural}/createNew${singularMayusculas}.controller');
    const { getOne${singularMayusculas}Controller } = require('../controllers/${plural}/getOne${singularMayusculas}.controller');
    const { update${singularMayusculas}Controller } = require('../controllers/${plural}/update${singularMayusculas}.controller');
    
    router.get('/', getAll${pluralMayusculas}Controller);
    router.get('/:id', getOne${singularMayusculas}Controller)
    router.post('/', createNew${singularMayusculas}Controller)
    router.put('/:id', update${singularMayusculas}Controller)
    
    module.exports = router;
    `
    fs.writeFile(routesDir + '/' + plural + '.route.js', contenido, function(err) {
        if (err) throw err;
    });
}

function crearControllerGet() {
    let singularMayusculas = capitalize(singular);
    let pluralMayusculas = capitalize(plural);
    let contenido = `
const getOne${singularMayusculas}Service = require('../../services/${plural}/getOne${singularMayusculas}.service');

exports.getOne${singularMayusculas}Controller = async(req, res) => {
    const ${singular} = await getOne${singularMayusculas}Service.getOne${singularMayusculas}(req.params.id);
    if (!${singular}) return res.status(404).send('Error de no encontrado')
    return res.status(200).send(${singular});
}
    `
    fs.writeFile(controllerDir + '/getOne' + singularMayusculas + '.controller.js', contenido, function(err) {
        if (err) throw err;
    });
}

function crearControllerGetAll() {
    let singularMayusculas = capitalize(singular);
    let pluralMayusculas = capitalize(plural);
    let contenido = `
const { getAll${pluralMayusculas} } = require("../../services/${plural}/getAll${pluralMayusculas}.service");

exports.getAll${pluralMayusculas}Controller = async(req, res, next) => {
    const ${plural} = await getAll${pluralMayusculas}();
    if (!${plural}.length) return res.status(404).send('Error no encontrado');
    else return res.status(200).send(${plural});
}
    `
    fs.writeFile(controllerDir + '/getAll' + pluralMayusculas + '.controller.js', contenido, function(err) {
        if (err) throw err;
    });
}

function crearControllerPost() {
    let singularMayusculas = capitalize(singular);
    let pluralMayusculas = capitalize(plural);
    let contenido = `
    const { createNew${singularMayusculas} } = require('../../services/${plural}/createNew${singularMayusculas}.service');

exports.createNew${singularMayusculas}Controller = async(req, res, next) => {
    createNew${singularMayusculas}(req.body)
        .then(result => res.status(201).send(result))
        .catch(err => res.status(400).send(err))
}
    `
    fs.writeFile(controllerDir + '/createNew' + singularMayusculas + '.controller.js', contenido, function(err) {
        if (err) throw err;
    });
}

function crearControllerUpdate() {
    let singularMayusculas = capitalize(singular);
    let pluralMayusculas = capitalize(plural);
    let contenido = `
    const { update${singularMayusculas}Service } = require("../../services/${plural}/update${singularMayusculas}.service")

    exports.update${singularMayusculas}Controller = async(req, res, next) => {
        const ${singular} = await update${singularMayusculas}Service(req.params.id, req.body);
        if (!${singular}) return res.status(404).send('No encontrado');
        else return res.status(200).send(${singular});
    }
    `
    fs.writeFile(controllerDir + '/update' + singularMayusculas + '.controller.js', contenido, function(err) {
        if (err) throw err;
    });
}

function crearServicioGet() {
    let singularMayusculas = capitalize(singular);
    let pluralMayusculas = capitalize(plural);
    let contenido = `
    const ${singularMayusculas} = require("../../models/${plural}.model")

    exports.getOne${singularMayusculas} = async(id) => {
        const ${singular} = await ${singularMayusculas}.findById({ _id: id });
        return ${singular};
    }
    `
    fs.writeFile(servicesDir + '/getOne' + singularMayusculas + '.service.js', contenido, function(err) {
        if (err) throw err;
    });
}

function crearServicioGetAll() {
    let singularMayusculas = capitalize(singular);
    let pluralMayusculas = capitalize(plural);
    let contenido = `const ${singularMayusculas} = require("../../models/${plural}.model")

    exports.getAll${pluralMayusculas} = async() => {
        const ${plural} = await ${singularMayusculas}.find()
        return ${plural};
    }`
    fs.writeFile(servicesDir + '/getAll' + pluralMayusculas + '.service.js', contenido, function(err) {
        if (err) throw err;
    });
}

function crearServicioPost() {
    let singularMayusculas = capitalize(singular);
    let pluralMayusculas = capitalize(plural);
    let contenido = `const ${singularMayusculas} = require("../../models/${plural}.model")

    exports.createNew${singularMayusculas} = async([CAMPOS]) => {
        const ${singular} = new ${singularMayusculas}({
           something: 'cool'
        });
        const result = await ${singular}.save();
        return result;
    }`
    fs.writeFile(servicesDir + '/createNew' + singularMayusculas + '.service.js', contenido, function(err) {
        if (err) throw err;
    });
}

function crearServicioUpdate() {
    let singularMayusculas = capitalize(singular);
    let pluralMayusculas = capitalize(plural);
    let contenido = `const ${singularMayusculas} = require("../../models/${plural}.model")
    exports.update${singularMayusculas}Service = async(id, [valores]) => {
        const ${singular} = await ${singularMayusculas}.findByIdAndUpdate(id, {
            something: 'cool',
        }, {
            new: true
        });
        return ${singular};
    }
    `
    fs.writeFile(servicesDir + '/update' + singularMayusculas + '.service.js', contenido, function(err) {
        if (err) throw err;
    });
}



function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

comenzar();