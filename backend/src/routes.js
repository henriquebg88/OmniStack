const express = require("express");
const { celebrate, Joi, Segments } = require('celebrate');
const OngController = require('./controllers/OngController.js');
const IncidentController = require('./controllers/IncidentControllers.js');
const ProfileController = require('./controllers/ProfileControllers.js');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

var ongBodyData = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
};
var profileHeaderData = {
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
};
var incidentParamsData = {
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
};
var pageNumberData = {
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
};


routes.get('/', (req, resp) => {
    resp.send("Home page");
})

routes.post('/session', SessionController.create);

routes.get('/profiles', celebrate(profileHeaderData), ProfileController.index);

routes.get('/incidents', celebrate(pageNumberData) ,IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',celebrate(incidentParamsData) ,IncidentController.delete);

routes.get('/ongs', OngController.index);
routes.post("/ongs", celebrate(ongBodyData) , OngController.create);

module.exports = routes;