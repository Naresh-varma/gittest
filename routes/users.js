const express = require('express');
const router = express.Router();
const Blog = require('../models/blogSchema');
const checkAuth = require('../middleware/checkAuth');
const checkAdmin = require('../middleware/checkAdmin');
const userController = require('../controllers/user');

/* GET users listing. */
router.post('/signUp', userController.signUp);

router.post('/logIn', userController.logIn);

router.post('/createBlog', checkAdmin, userController.createBlog);

router.post('/createComment', checkAuth, userController.createComment);

router.get('/getAllBlogs', (req, res, next) => {
  Blog.find()
    .populate('comments')
    .exec((err, blogs) => {
      if(err){
        console.log('Error in populate');
        res.status(500).json({
          msg : err
        })
      }else{
        res.status(200).json({
          message : blogs
          
        })
      }
    })
})
module.exports = router;
