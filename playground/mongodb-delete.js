const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  } else {
    console.log('Connected to MongoDB server');
  }

  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndDelete({text: 'Something to do 4'}).then((result)=>{
    console.log(result);
  },(err)=>{
    console.log('Error',err)
  });

  // db.collection('Todos').deleteMany({text: 'Something to do 4'}).then((result)=>{
  //   console.log(result);
  // },(err)=>{
  //   console.log('Error',err)
  // });

  client.close();
});