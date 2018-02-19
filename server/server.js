var express = require('express');
var _=require('lodash');
var bodyParser = require('body-parser');
// requiring connection to db
var {mongoose} = require('../db/mongoose.js');
var {Todo}=require('../models/todo.js');
var {User}=require('../models/user.js');


var app = express();
app.use(bodyParser.json()); //adding middleware

app.post('/todos',(req,res)=>{
  //console.log(req.body);
  var newTodo = new Todo({
    text:req.body.text
  });
  newTodo.save().then((doc)=>{
    res.send(doc)
  },(error)=>{
    res.send(error);
  });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({
      todos,
      name:'uzair'
    });
  },(e)=>{
    res.status(400).send(e);
  });
});


app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    User.findById(id).then((user)=>{
      if(user){
        res.send(user);
      }
      else{
        return  res.status(404).send(e);
      }

    },(e)=>{
     return  res.status(404).send(e);
   }).catch((e)=>{
     return res.status(400).send(e);
   });
});

                                              //update patch
app.patch('/todos/:id',(req,res)=>{
  var id = req.params.id;
  var body = _.pick(req.body,['completed','text']);
  //console.log(JSON.stringify(body,undefined,2));
  if(body.completed)
  {
    //console.log('inside 1st check');
    body.completedAt = new Date().getTime();
  }
  else {
    //console.log('inside 1st check else');
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((doc)=>{
    if(doc)
    {
      //console.log('inside 3st check');
      res.send(doc);
    }
    else{
      //console.log('inside 3st check else');
      return res.status(404).send();
    }

  },(e)=>{
    res.status(400).send();
  });


});



app.listen(3000,()=>{
  console.log('start on 3000');
});


                                              //insert data
/*
var newTodo  = new Todo({
  text:'cook dinner'
});
*/
                                          //save in database
//newTodo.save().then((result)=>{console.log(JSON.stringify(result,undefined,2))},(error)=>{console.log(error);});

/*
var newTodo = new Todo({
  text:' Something to eat ',
  completed:false,
  completedAt:12
});

newTodo.save().then((result)=>{
  console.log(JSON.stringify(result,undefined,2));
},(error)=>{
  console.log(error);
});
*/



                                      //inser data in User
/*
var newUser = new User({
  email:' úzair.shriaz@live.com '
});
newUser.save().then((result)=>{
  console.log(JSON.stringify(result,undefined,2));
},(error)=>{
  console.log(error);
});
*/
