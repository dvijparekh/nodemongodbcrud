const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.get('/', async (req, res) => {
  const users = await User.find();
  res.render('index', {
    users
  });
});

router.get('/add', async (req, res) => {
  
  res.render('form',{
    user:null
  });
});

router.post('/insert', async (req, res, next) => {
  const user = new User(req.body);
  await user.save();
  res.redirect('/');
});

router.get('/edit/:id', async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.render('form', { user });
});

router.post('/update/:id', async (req, res, next) => {
  const { id } = req.params;
  await User.update({_id: id}, req.body);
  res.redirect('/');
});


module.exports = router;
