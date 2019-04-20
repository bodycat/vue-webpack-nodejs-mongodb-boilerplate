const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://192.168.99.100:32772/stream', { useNewUrlParser: true });

const { User } = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

app.post('/users', async (req, res) => {
  let user = new User(req.body);
  user = await user.save();
  res.send(user);
});

app.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
  res.send(user);
});

app.delete('/users/:id', async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.send(user);
});

app.listen(8888);