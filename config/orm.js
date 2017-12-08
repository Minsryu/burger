var connection = require("./connection.js");

var orm = {
	selectAll: function(tableInput,send){
		var queryString = "SELECT *FROM ??";
		connection.query(queryString,[tableInput],function(err,result){
			// console.log(result);
			send(result);
		});
	},
	selectStatus:function(tableInput,column1,val1,send){
		var queryString = "SELECT *FROM ?? WHERE ?? = ?"
		connection.query(queryString,[tableInput,column1,val1],function(err,result){
			send(result);
		})
	},
	insertOne: function(tableInput,column1,column2,val1,val2,send){
		var queryString = "INSERT INTO ?? (??,??) VALUE(?,?);"
		console.log("this post");
		connection.query(queryString,[tableInput,column1,column2,val1,val2],function(err,result){
			if(err){
				send(result);
			}
			send(result);
		});
	},
	updateOne: function(tableInput,column1,val1,id,send){

		var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";
		
		connection.query(queryString, [tableInput,column1,val1,id],function(err,result){
			if(err){
				send(err);
			}
			send(result);
		});

	}
};

module.exports = orm;