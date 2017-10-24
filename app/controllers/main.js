const Post = require('../models/post');

module.exports = {
  showHome : (req, res) => {
      Post.find({}, (err, posts) => {
          if (err) {
              res.send(err)
          }
          res.render('pages/home', {posts : posts});
      });
  }
};