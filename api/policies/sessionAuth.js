/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
var request = require('request');

module.exports = function(req, res, next) {
  console.log('sessionAuth activated');
  var sessionId = req.cookies.sessionid;
  var options = {
    uri: 'http://localhost:8000/api/v1/collaboration/',
    method: 'POST',
    json: {
      'sessionId': sessionId
    }
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 201) {
      next() // Show the HTML for the Google homepage.
    } else {
      return res.forbidden();
    }
  });
  // console.log(req.cookies.sessionid);


  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  // if (req.session.authenticated) {
    // return next();
  // }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  // return res.forbidden('You are not permitted to perform this action.');
  // next();
};
