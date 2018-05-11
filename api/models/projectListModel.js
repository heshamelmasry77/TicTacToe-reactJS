// 'use strict';
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// const ProjectSchema = new Schema({
//   name: {
//     type: String,
//     required: 'Kindly enter the name of the project'
//   },
//   description: {
//     type: String,
//     required: 'Kindly enter the description of the project'
//   },
//   url: {
//     type: String,
//     required: 'Kindly enter the url of the project'
//   },
//   about: {
//     type: String,
//     required: 'Kindly enter the about text of the project'
//   }
//   ,
//   picture: {
//     data: Buffer, contentType: String
//   },
//   Created_date: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: [
//       {
//         type: String,
//         enum: ['pending', 'ongoing', 'completed']
//       }],
//     default: ['pending']
//   }
//
// });
//
// module.exports = mongoose.model('Projects', ProjectSchema);