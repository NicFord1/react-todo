const express = require('express');

// Create our app
const PORT = process.env.PORT || 3000;
let app = express();

app.use(express.static('public'));
app.get('/public', (req, res) => {
  res.send('ToDo Server');
});

app.listen(PORT, function() {
  console.log(`Express server is up on port ${PORT}`);
});
