const express = require("express");
const OngController = require('./controllers/OngController.js');
const IncidentController = require('./controllers/IncidentControllers.js');
const ProfileController = require('./controllers/ProfileControllers.js');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/', (req, resp) => {
    resp.send("Home page");
})

routes.post('/session', SessionController.create);

routes.get('/profiles', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/ongs', OngController.index);
routes.post("/ongs", OngController.create);

module.exports = routes;