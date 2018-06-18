let express = require('express');
let bodyParser = require('body-parser');

// let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(port,()=>{
  console.log(`Started at ${port}`);
});

module.exports = {app};