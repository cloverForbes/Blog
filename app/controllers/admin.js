const Post = require('../models/post');
const formidable = require('formidable');
const path = require('path');
const mv = require('mv');

module.exports = {
    getAllPosts : (req, res) => {
        Post.find({}, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.render('pages/admin', {post : post });
        });
    },

    getPosts : (req,res) => {
      Post.find({}, (err, posts) => {
          if(err){
              res.send(err)
          }

          res.json(posts)
      })
    },

    getPost : (req, res) => {
        Post.findOne({_id : req.params.id}, (err, post) => {
            if(err){res.send(err)}
            res.json(post);
        })
    },

    newPost : (req, res) => {
        res.render('pages/create');
    },

    createPost : (req, res) => {
        let post = new Post(req.body);
        post.save((err, post) => {
           if(err){res.send('err')}
           res.render('pages/post', {post: post});
        });
    },

    displayPost : (req, res) => {
        Post.findOne({_id : req.params.id}, (err, post) => {
            if(err){res.send(err)}
            res.render('pages/post', {post: post});
        })
    },

    uploadFile : (req,res) => {
       let form = new formidable.IncomingForm();
       uploadDir = path.join(__dirname, '..', '..' ,'public', 'img');

       form.on('file', function(field, file) {
           mv(file.path, path.join(uploadDir, file.name), err => {
               console.log(path.join(uploadDir, file.name));
               console.log(err);
           });
        });

        form.on('end', function() {
            res.end('success');
        });

        form.parse(req);
    }
};