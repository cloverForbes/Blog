const express = require('express'),
    router  = express.Router(),
    adminController = require('./controllers/admin');

module.exports = router;

router.get('/', (req, res) => {res.send('home')});


router.get('/admin', adminController.getAllPosts);
router.get('/admin/create', adminController.newPost);
router.post('/admin/create', adminController.createPost);
router.put('admin/:id/update');


router.get('/post/:id', adminController.displayPost);