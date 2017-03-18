console.log("Hello world");

var mongojs = require("mongojs");
var db = mongojs("mongodb://brobz:astecas2012@ds047146.mlab.com:47146/afi", ["accounts", "progress"]);

db.accounts.find({username:"1"}), function(err, res){
        if(res.length > 0){
          console.log("failed");
          return;
        }else{
          console.log("SUCCES!");
        }
      }
