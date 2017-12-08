var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var orm = require("./config/orm.js");

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// app.get("/",function(req,res){
// 	var data = orm.selectAll("burgers",function(data){
// 		console.log("server"+data);

// 		res.render("index", {list:data});
// 	})
	
// });

app.get("/",function(req,res){
	orm.selectAll("burgers",function(data){

		var eat = [];
		var yum = [];

		for(var i=0; i<data.length;i++){
			if(data[i].devoured === 0){
				// console.log("this is not");
				// console.log(data[i]);
				eat.push(data[i]);
			}
			else{
				// console.log("this is yum");
				// console.log(data[i]);
				yum.push(data[i]);
			}
		}

		// console.log(eat);

		//can't send two render request at once but can send two data at once to render 
		res.render("index", {eatList:eat,yumList:yum});
	
	});
	
});


app.post("/api/create",function(req, res){
	orm.insertOne("burgers","burger_name","devoured",req.body.burger,0,function(data){
	// 	console.log(data);
	res.json({id: data.insertId});
	});

});

app.put("/api/update",function(req,res){
	//updataOne tableInput,column1,val1,id,send
	console.log(req.body.burgerId);

	orm.updateOne("burgers","devoured",1,req.body.burgerId,function(data){
		res.json({id: data.insertId});
	});
});


app.listen(port, function() {
  console.log("Listening on PORT " + port);
});