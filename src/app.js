
const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

app.get('/api/musics', (req, res, next) => {
   const stuff = [
     {
      id: 1,
      author: 'rraez',
      title: 'fezfez',
      likes: 2,
      dislikes: 3,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
     },
     {
      id: 2,
      author: 'bbbbbb',
      title: 'fezfez',
      likes: 22,
      dislikes: 3,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
     },
   ];
   res.status(200).json(stuff);
 });

module.exports = app;