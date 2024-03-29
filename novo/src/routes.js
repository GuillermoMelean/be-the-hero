const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const AuthenticationController = require('./controllers/AuthenticationController');
// const OngController = require('./controllers/OngController');
// const IncidentController = require('./controllers/IncidentController');
// const ProfileController = require('./controllers/ProfileController');
// const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/users', (request, response) => {
  const body = request.body; 
  console.log('body', body);
  
  return response.json({
    evento: 'Semana Omnistack 11.0',
    aluno: 'Guillermo Melean'
  })
})

// //routes.post('/sessions',SessionController.create);
// routes.post('/sessions', SessionController.index);

// routes.get('/ongs', OngController.index)

// routes.post('/ongs', celebrate({
//     [Segments.BODY]: Joi.object().keys({
//         name: Joi.string().required(),
//         email: Joi.string().required().email(),
//         whatsapp: Joi.string().required().length(9),
//         city: Joi.string().required(),
//         uf: Joi.string().required().length(2)
//     })
// }), OngController.create)

// routes.get('/incidents', celebrate({
//     [Segments.QUERY]: Joi.object().keys({
//         page: Joi.number(),
//     })
// }), IncidentController.index);

// routes.post('/incidents', IncidentController.create);


// routes.delete('/incidents/:id', celebrate({
//     [Segments.PARAMS]: Joi.object().keys({
//         id: Joi.number().required()
//     })
// }), IncidentController.delete);

// routes.get('/profile', celebrate({
//     [Segments.HEADERS]: Joi.object({
//         authorization: Joi.string().required()
//     }).unknown()
// }), ProfileController.index);

/**
 * Para deixar estas routes disponiveis para que o index.js possa acessá-las.
 * Exportar variáveis de dentro de um ficheiro.
 */
module.exports = routes; 