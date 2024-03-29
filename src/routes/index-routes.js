module.exports = app => {
  const dataController = require('../controllers/data.controller');

  app.post('/data', dataController.dump);
  app.get('/data', dataController.fetch);
}