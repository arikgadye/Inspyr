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
    books: ['Romeo and Juliet', 'Hamlet', 'Midsummers night dream', "Star Wars"]
  });
  User.create({
    name : 'Larry Page',
    location : 'San Francisco',
    image: 'https://lh3.googleusercontent.com/-IrkyiCBVSFU/U9is0BsepmI/AAAAAAAAO-0/J5WQrMke7x4/s640/Larry_4x3_use.jpg',
    books: ["The meaning of life", "Zen Budhism", "Magical Mysteries", "Montana My love", "Hello California"]
  }); 
  User.create({
    name : 'Dave Grohl',
    location : 'Boulder',
    image: 'http://www.fm96.com/files/2014/05/davegrohl.jpg',
    books: ["Rock n' roll", "Foo is my lyfe", "Baby teach me guitar", "Poems, Sex & Poetry"]
  });
  User.create({
    name : 'Jay-Z',
    location : 'Brooklyne',
    image: 'https://a3-images.myspacecdn.com/images03/35/a03b92e0338b4b229ae5e3cb379a2907/300x300.jpg',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  User.create({
    name : 'Johnny walker',
    location : 'Washington',
    books: ["Thuggin"]
  });
  
});