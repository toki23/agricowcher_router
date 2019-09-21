var express = require('express');
var router = express.Router();
var request = require('request');
router.get('/:lat/:long', function(req, res, next) {
	var options = {
	    url: `http://192.168.0.1/flightdrone/${req.params.lat}/${req.params.long}`,
	    method: 'GET'
	}
	request(options, function (error, response, body) {
	    res.send(body);
	 
	});




});

module.exports = router;
