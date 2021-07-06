const mongoose = require('mongoose')

const RainfallOutlookSchema = new mongoose.Schema(
  {
   Province: String,
   Municipality: String,
   data: {
    month: {
      'January 2021': String,
      'February 2021': String,
      'March 2021': String,
      'April 2021': String,
      'May 2021': String,
      'June 2021': String,
      'July 2021': String,
      'August 2021': String,
      'September 2021': String,
      'October 2021': String,
      'November 2021': String,
      'December 2021': String,
    }
   }
  })

mongoose.model('RainfallOutlook', RainfallOutlookSchema, 'rainfall-outlook')