const express = require('express');
const { registerUser , removeUser,updateUser,getAllUser } = require('../controllers/user.controller.js')
const router = express.Router();

  
  router
  .route('/register')
  .post( registerUser)

  router
  .route('/delete')
  .post( removeUser)

  router
  .route('/update')
  .post( updateUser)

  router
  .route('/alluser')
  .post( getAllUser )
   
 
  module.exports = router