
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var path = require('path');

var router = express.Router();
var userController = require('../controllers/userControllers.js');

//////////////////
//users 
//////////////////

//get all users. not usually useful
router.route('/users')
  .get(function (req, res) {
    console.log('user get')
    userController.getAll(function(err, person){
      if (err) {
        return res.json({err: err})
      }
      res.json(person)
    });
  });

//create user
router.route('/users')
  .post(function (req, res) {
    //example:
    var newuser = {
      username: req.body.username,
      password: req.body.password,
      pins: []
    }

    userController.addUser(newuser, function(err, pins){
       if (err) {
        return res.json({err: err});
      }
      res.redirect("/#map");
    });
  });

//delete user
router.route('/users')
  .delete(function (req, res) {
    userController.removeUser({username: req.body.username}, function(err, user){
       if (err) {
        return res.json({err: err});
      }
      res.json(user);
    });
  });

//////////////////
//pins
//////////////////

//get array of pins for single user
router.route('/maps/:username')
  .get(function (req, res) {
    var username = req.params.username;

    userController.findOne({username: username}, function(err, person){
      if (err) {
        return res.json({err: err})
      }
      res.json(person)
    });
  });

//insert new pin in pins array on user obj
router.route('/maps/:username')
  .put(function (req, res) {
    var username = req.params.username;
    var newpin = req.body;

    console.log('put username', username)
    console.log('newpint', newpin);

    userController.updatePins({username: username}, newpin, function(err, pins){
       if (err) {
        return res.json({err: err});
      }
      res.json(pins);
    });
  });

// delete last pin from array
router.route('/maps/:username')
  .delete(function (req, res) {
    var username = req.params.username;
    userController.removeLastPin({username: username}, function(err, pins){
       if (err) {
        return res.json({err: err});
      }
      res.json(pins);
    });
  });

//need to refactor to delete specific pin. current controller not working
  // router.route('/maps/:username')
  // .delete(function (req, res) {

  //   var username = req.params.username;
  //   // var pinId = "5692934152a5369a1a9f6fa8"
  //   var pinId = req.body;
  //   userController.removePin({username: username}, pinId, function(err, doc){
  //      if (err) {
  //       return res.json({err: err});
  //     }
  //     res.json(doc);
  //   });
  // });

module.exports = router;