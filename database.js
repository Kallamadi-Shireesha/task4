
/*express js*/
const express=require('express')
const bodyparser=require('body-parser')
/*sending email*/
const nodemailer=require('nodemailer');
var events = require('events');
var events = new events.EventEmitter();


const app=express()
const port=9015


const { Client}=require('pg')
const client=new Client ( {
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"$Hiree$ha491",
    database:"project2"
})
client.connect()

app.use(express.urlencoded({extended: true}));
app.use(express.json())
//app.use(bodyparser.urlencoded({extended: false}));
app.set('view engine','pug')

app.get('/',function(req,res) {
    res.sendFile('index.html',{root:__dirname})
});
client.query('select * from excel2',(err,result)=> {
    if(!err) { console.log(result.rows);}
    //client.end();

})





app.post('/name',function(req,res) {
   


    console.log("INSERT INTO users(namee,upvote,downvote,description) values('"+req.body.namee+"',"+req.body.upcount+","+req.body.downvote+",'"+req.body.des+"')");
    var postgres = "INSERT INTO users(namee,upvote,downvote,description) values('"+req.body.namee+"',"+req.body.upcount+","+req.body.downvote+",'"+req.body.des+"')";
    //'INSERT INTO test SET ?', {name:req.body.name, age:req.body.mage},
    client.query(postgres,function(err,result) {
        if(!err) {
         console.log(result.rows);}
         client.end()

    })
    
    res.render('index',{title:'datasaved', message:"data saaved"});
    
})
/*email
var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,

    auth: {

        user:"kallamadi555@gmail.com",
        pass:"kall@madi491"
    }

});

const options = {
    from:"kallamadi555@gmail.com",
    to: "cvt@corevaluetech.com",
    subject: "voting system",
    subject: 'An Attached File',
  text: 'Check out this attached pdf file',
  attachments: [{
    
    
    
    filename: 'hackCovest PPT.pptx',
    path: 'C:\Users\navin\OneDrive\Desktop\internshiptask_3\hackCovest PPT.pptx',
    contentType: 'hackCovest PPT\pptx'
   
  }]
}
console.log(options);
smtpTransport.sendMail(options,function(err, info) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log("sent:"+info.response);
    }
  })

*/



/*1

const { Client}=require('pg')
const client=new Client ( {
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"$Hiree$ha491",
    database:"project2"
})
client.connect()

app.use(express.urlencoded({extended: true}));
app.use(express.json())
//app.use(bodyparser.urlencoded({extended: false}));
app.set('view engine','pug')

app.get('/',function(req,res) {
    res.sendFile('index.html',{root:__dirname})
});
client.query('select * from excel2',(err,result)=> {
    if(!err) { console.log(result.rows);}
    //client.end();

})





app.post('/name',function(req,res) {
   


    console.log("INSERT INTO users(namee, count,upvote) values('"+req.body.namee+"',"+req.body.count+","+req.body.upcount+")");
    var postgres = "INSERT INTO users(namee, count,upvote) values('"+req.body.namee+"',"+req.body.count+","+req.body.upcount+")";
    //'INSERT INTO test SET ?', {name:req.body.name, age:req.body.mage},
    client.query(postgres,function(err,result) {
        if(!err) {
         console.log(result.rows);}
         client.end()

    })
    
    res.render('index',{title:'datasaved', message:"data saaved"});
    
})




/*
app.get('/',function(req,res) {
    res.render('index',{title:'hey express message is chaged',message:'message changed',expressjs:'expressjs messagenpm'})
})*/

//app.get('/',(req,res) => res.send('hello world'))
//app.listen(port,() => console.log("example"))


/*
//get data from table
client.query('select * from users',(err,result)=> {
    if(!err) { console.log(result.rows);}
    client.end();

})*/

app.listen(port,()=> console.log("listening"))