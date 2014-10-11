/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/users/model');


User.find({}).remove(function() {
  User.create({
    name : 'Tupac Shakur',
    location : 'Marin',
    image: 'http://thenypost.files.wordpress.com/2013/10/film-tupac-shakur.jpg',
    books: ['Romeo and Juliet', 'Hamlet']
  });
  User.create({
    name : 'Jon Denver',
    location : 'Boulder',
    image: 'http://upload.wikimedia.org/wikipedia/commons/5/5d/John_Denver_1973.jpg',
    books: ["Thug lyfe"]
  });
   User.create({
    name : 'Larry Page',
    location : 'San Francisco',
    image: 'https://lh3.googleusercontent.com/-IrkyiCBVSFU/U9is0BsepmI/AAAAAAAAO-0/J5WQrMke7x4/s640/Larry_4x3_use.jpg',
    books: ["The meaning of life"]
  }); 
   User.create({
    name : 'Tim Ferris',
    location : 'San Francisco',
    image: 'http://upload.wikimedia.org/wikipedia/commons/b/bb/Timothy_Ferriss.jpg',
    books: ["Ghengis Kahn", "Harry Potter"]
  }); 
  User.create({
    name : 'Dave Grohl',
    location : 'Boulder',
    image: 'http://www.fm96.com/files/2014/05/davegrohl.jpg',
    books: ["Rock n' roll"]
  });
});