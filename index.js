const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

const getUserId = (value) => {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
};

const isValidUser = ({ name, email } = {}) =>
  typeof name === 'string' &&
  name.trim().length > 0 &&
  typeof email === 'string' &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Temporary users data
let users = [
  {
    id: 1,
    name: 'Muhammad Daniyal',
    email: 'Muhammaddaniyal5477@gmail.com'
  },
  {
    id: 2,
    name: 'Abdullah',
    email: 'Abdullah2346@outlook.com'
  }
];


// GET ALL USERS

app.get('/users', (req, res) => {
  res.json(users);
});


// GET USER BY ID

app.get('/users/:id', (req, res) => {

  const userId = getUserId(req.params.id);

  if (userId === null) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      message: 'User not found'
    });
  }

});


// POST - CREATE USER

app.post('/users', (req, res) => {

  if (!isValidUser(req.body)) {
    return res.status(400).json({
      message: 'A valid name and email are required'
    });
  }

  const newUser = {
    id: users.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1,
    name: req.body.name.trim(),
    email: req.body.email.trim()
  };

  users.push(newUser);

  res.status(201).json({
    message: 'User created successfully',
    user: newUser
  });

});


// PUT - UPDATE USER

app.put('/users/:id', (req, res) => {

  const userId = getUserId(req.params.id);

  if (userId === null) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  if (!isValidUser(req.body)) {
    return res.status(400).json({
      message: 'A valid name and email are required'
    });
  }

  const user = users.find((u) => u.id === userId);

  if (user) {

    user.name = req.body.name.trim();
    user.email = req.body.email.trim();

    res.json({
      message: 'User updated successfully',
      user: user
    });

  } else {

    res.status(404).json({
      message: 'User not found'
    });

  }

});


// DELETE USER

app.delete('/users/:id', (req, res) => {

  const userId = getUserId(req.params.id);

  if (userId === null) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {

    users.splice(userIndex, 1);

    res.json({
      message: 'User deleted successfully'
    });

  } else {

    res.status(404).json({
      message: 'User not found'
    });

  }

});


// START SERVER

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app;
