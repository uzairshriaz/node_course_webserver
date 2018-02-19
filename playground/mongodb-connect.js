const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


                                                            //inserting data
/*   db.collection('Todos').insertOne({
     text: 'Something to do',
     completed: false
   }, (err, result) => {
     if (err) {
       return console.log('Unable to insert todo', err);
     }

     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
   });
*/


                                              // Insert new doc into Users (name, age, location)
  /*db.collection('Users').insertOne({
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops);
  });
*/

                                                              //fetching data

//to Array resturn promise
//to query result based on some condition use object in find to specify criteria
/*
db.collection('Todos').find({completed:true}).toArray().then((result)=>{
  console.log(JSON.stringify(result,undefined,2));
},(error)=>{
  console.log('error : ',error);
});
*/

                                                              //fetching data based on id using objectID
/*
db.collection('Todos').find({
  _id: new ObjectID('5a85800372eb9e2dac369ae7')
}).toArray().then((result)=>{
  console.log(JSON.stringify(result.length,undefined,2));
},(error)=>{
  console.log('error',error);
});
*/
                                                              //fetching data based on name
//db.collection('Users').find({name:'Andrew'}).toArray().then((result)=>{console.log(JSON.stringify(result,undefined,2))},(error)=>{console.log('error',error)});


/*                                                              //update a documnet
db.collection('Users').findOneAndUpdate({
  name:'fahad'
},
  {
    $set:{
          location:'Lahore'
         }
  },
  {
    returnOriginal:false
  }).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
  },(error)=>{
    console.log(error);
  });
  */

                                                                //update document by incremnt
db.collection('Users').findOneAndUpdate({
  name:'fahad'
},{
  $inc:{
    age:1
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(JSON.stringify(result,undefined,2));
},(error)=>{});
//  db.close();
});
