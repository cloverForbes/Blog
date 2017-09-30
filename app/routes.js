const express = require('express'),
    router  = express.Router(),
    adminController = require('./controllers/admin'),
    mainController  = require('./controllers/main');

module.exports = router;

router.get('/', mainController.showHome);

router.get('/api/articles', adminController.getPosts);
router.get('/api/articles/:id', adminController.getPost);

router.get('/admin', adminController.getAllPosts);
router.get('/admin/create', adminController.newPost);
router.post('/admin/create', adminController.createPost);
router.put('admin/:id/update');


router.get('/post/:id', adminController.displayPost);