module.exports = {
  index: function(req, res) {
    // sails.sockets.blast('message', {msg: 'hello world'}, req.socket);
    // res.send('socket blasted...');
    return res.view('homepage');
  }
 };