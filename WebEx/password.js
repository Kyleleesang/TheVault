const fs = require('fs');
 const path = require('path');
const express = require('express');
const app = express();
app.listen(process.env.PORT || 4000);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
const database = require('./users.json')
const crypto = require('crypto')
app.get('/', (req,res) =>{
   res.render("login.hbs");
});
app.post('/signin', (req,res) =>{
    let user = req.body.username;
    let pass = req.body.password;
    if(database[user] === undefined){
        var obj = {
            "user":user,
           "pass":pass
        }
        var obj2 = JSON.stringify(obj)
        fs.writeFileSync(user+".json", obj2);
        const len = 4096,
pos = 0, offset =0,
file = user+".json",
buff = Buffer.alloc(len);

fs.open(file, 'r', (err, fd) => {
 fs.read(fd, buff, offset, len, pos, (err, bytes, buff) => {
 const hash = crypto
 .createHash('whirlpool')
 .update(buff)
 .digest('hex');
 console.log(hash);
     let other_us = user+user;
     var obj3 = {
         user:pass,
         other_us:hash
     }
     var obj4 = JSON.stringify(obj4)
     fs.readFile('users.json', function (err, data) {
    var json = JSON.parse(data)
    json.push(obj4)

    fs.writeFile("users.json", JSON.stringify(json))
})
     

 
 });
});
         
    }
    else{
        if(database[user] === pass){
            
        }  
        else{
            res.render('login.hbs');
        }
    }


    

});