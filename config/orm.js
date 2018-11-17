var connection = require("./connection");

var orm = {
    selectAll : function(cb) {
        var query = "Select * From burgers;";
        connection.query(query, function(err,result) {
            if(err) throw err;
            cb(result);
        });
    },
    insertOne : function(vals , cb) {
        var query = "Insert into burgers (burger_name , devoured) values (?,?)";
        console.log(query);
        connection.query(query , vals , function(err , result) {
            if(err) throw err;

            cb(result);
        });
    },
    updateOne : function(vals , cb) {
        var query = "Update burgers set burger_name = ?, devoured = ? Where id = ?";

        connection.query(query , vals , function(err , result) {
            if(err) throw err;

            cb(result);
        })
    }
}

module.exports = orm;