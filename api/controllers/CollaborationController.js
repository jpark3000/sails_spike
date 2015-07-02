module.exports = {
  index: function(req, res) {
    // sails.sockets.blast('message', {msg: 'hello world'}, req.socket);
    // res.send('socket blasted...');
    return res.view('annotation');
  },

  blast: function(req, res) {
    console.log('blasted');
    sails.sockets.broadcast('room1', 'message', {msg: 'hello world'}, req.socket);
    return res.ok();
  },

  foo: function(req, res) {
    sails.sockets.broadcast('room2', 'message', {msg: 'hellow room2'}, req.socket);
    return res.ok();
  },

  subscribeToRoom: function(req, res) {
    var roomName = req.param('roomName');
    console.log(roomName);
    sails.sockets.join(req.socket, roomName);
    return res.ok();
  },

  testSocketPost: function(req, res) {
    console.log(req.body);
    // res.send({msg: 'hola mundo'});
    sails.sockets.blast('message', req.body, req.socket);
  },

  action: function(req, res) {
    var roomName = req.param('roomName');
    var action = req.param('action');
    var data = req.param('data')
    sails.sockets.broadcast(roomName, action, data, req.socket);
    return res.ok();
  }

  // activeTool: function(req, res) {
  //   var roomName = req.param('roomName');
  //   sails.sockets.broadcast(roomName, 'activeTool', req.body, req.socket);
  //   return res.ok();
  // },



  // pushClick: function(req, res) {
  //   var roomName = req.param('roomName');
  //   sails.sockets.broadcast(roomName, 'click', req.body, req.socket);
  //   return res.ok();
  // },

  // pushMouseUp: function(req, res) {
  //   var roomName = req.param('roomName');
  //   sails.sockets.broadcast(roomName, 'click', req.body, req.socket);
  //   return res.ok();
  // },

  // mouseDown: function(req, res) {
  //   var roomName = req.param('roomName');
  //   sails.sockets.broadcast(roomName, 'mouseDown', req.body, req.socket);
  //   return res.ok();
  // }
 };