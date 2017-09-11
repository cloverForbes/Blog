const Post = require('../models/post');

module.exports = {
    getAllPosts : (req, res) => {
        Post.find({}, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.render('pages/admin', {post : post });
        });
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
    }
};