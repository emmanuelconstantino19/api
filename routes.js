
const controller = require('./controller')

module.exports = (app) => {
  app.get('/', controller.homepage)
  app.get('/rainfall-outlook-all', controller.rainfallOutlookAll)
}