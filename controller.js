const mongoose = require('mongoose')
const RainfallOutlook = mongoose.model('RainfallOutlook')

exports.homepage = (req, res) => {
  res.end()
}

exports.rainfallOutlookAll = (req, res) => {
  RainfallOutlook.find({ }, (err, results) => {
    res.send(results)
  })
}