module.exports = {

  subscribeToRoom: function(req, res) {
    var roomName = req.param('roomName');
    console.log(roomName);
    sails.sockets.join(req.socket, roomName);
    return res.ok();
  },

  action: function(req, res) {
    var roomName = req.param('roomName');
    var action = req.param('action');
    var data = req.param('data');
    sails.sockets.broadcast(roomName, action, data, req.socket);
    return res.ok();
  }
 };