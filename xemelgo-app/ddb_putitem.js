// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-west-2'});

var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
    TableName: 'Employee',
    Item: {
     'EmployeeID': {N: '1'},
     'EmployeeFirstName': {S:'Hattie'},
     'EmployeeLastName': {S:'Girling'},
     'EmployeeAddress': {S:'017 Bellgrove Crossing'},
     'EmployeeState': {S:'MN'},
     'EmployeeZipCode': {S:'55108'},
     'EmployeePhoneNumber': {S:'612-511-3968'},
     'EmployeeEmail': {S:'hgirling0@indiatimes.com'},
     'EmployeeBirthDate': {S:'01/30/1972'},
     'EmployeePositionID': {N:'1'},
     'EmployeeStartDate': {S:'04/10/1946'},
     'EmployeeEndDate': {S:'05/23/1961'}
    }
  };

  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });