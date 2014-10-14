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
    books: ["The meaning of life", "Zen Budhism", "Magical Mysteries", "Montana My love", "Hello California", "sup"]
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
    name: "Jim jones",
    location: "Balls"
  });
  User.create({
    name: "Bobby G",
    location: "sup"
  });
  User.create({
    name : "johnny walker",
    location: "Yo"
  });
  User.create({
    name : "Eintstein",
    location: "Shuppp",
    image: 'http://photos.america.gov/galleries/amgov/30145/famous_refugee/PG_Famous_Refugee_3.jpg'
  });
  User.create({
    name: 'Lincoln',
    location: "NA",
    image: 'data:image/jpeg;base64,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'
  });
  User.create({
    name: "Sparrow",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfC0sE5djM0AMZfyr6SkFyprHZTpwN2mIkJNxQCG0HAgoPnFpMGw'
  });
  User.create({
    name: "J Lawrence",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQ731YX2QzMSRtqhsh4Sp2WYfLpIIiEvZV_r1-bFuK8xtF0V9L"
  });
  User.create({
    name: "GW",
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRLKztNrmLkcZHmbzqlR0qRP78laUa7AgnDfQJgELoD-6_Y8zv2g'
  });
  User.create({
    name: "MJ",
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRNeDEXU_P7lFAnT2jzIR1rPC28TcfJ45z5yJBOPonhHzptbAJ5'
  });
  User.create({
    name: "Leo D",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSFhUE3KUlPu6LKBPwbM0gBNgUL8zgaCczLKGZkT9uPmVFo8trKg"
  });
  User.create({
    name: 'Emma W',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysQtDrB6Fp-JzIVJmOrNyfwwmQ2Tsj1umzw0u4Cp_ht3tyDZU"
  });
  User.create({
    name: "Michelle Obama",
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSaOkdODoldn26sgjug1brtvlnXE1XO_fG5MjuQgIMvmEoIMXA-'
  });
  User.create({
    name: "Person",
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTn6JfLeV21Ljj06IJHti0YssrvZtXT-2UrgFjemKm1KyvhuLAj'
  });
  User.create({
    name: "Jim Carey",
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1MrkThsjmgel0OG2U8b5EdFtiVzlnTvDKbnbZU7cedoi-9bw8CQ'
  });
  User.create({
    name: "Mark Zuck",
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTeCJQ8gejt9Fp2PzR8GKOeIVjkhg6aIxYusjes0QTh0bMm6rS4'
  });
  User.create({
    name: "the T",
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4jO1sVkuTmcEWa5JygYbTxi6IGD4JEQQizWIwsQyrVy--yTR5'
  });
  User.create({
    name: "G Clooney",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_WyvLPdT7Mgrs-M-kcZcfmLY8dZf_PJd6nHCerpY9NMc4sg70BA"
  })
  
});