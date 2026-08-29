const express = require('express');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());

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

  const userId = parseInt(req.params.id);

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

  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);

  res.status(201).json({
    message: 'User created successfully',
    user: newUser
  });

});


// PUT - UPDATE USER

app.put('/users/:id', (req, res) => {

  const userId = parseInt(req.params.id);

  const user = users.find((u) => u.id === userId);

  if (user) {

    user.name = req.body.name;
    user.email = req.body.email;

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

  const userId = parseInt(req.params.id);

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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});