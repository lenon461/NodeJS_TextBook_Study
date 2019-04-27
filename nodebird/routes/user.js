const express = require('express');

const { isLoggedIn } = require('./middlewares');
const { User, Post } = require('../models');
const test = require('../models');

const router = express.Router();

router.post('/:id/follow', isLoggedIn, async(req, res, next) => {
    try {
        const user = await User.find({ where: { id: req.user.id } });
        const target_user = await User.find({ where: { id: req.params.id }});
        
        const follow = await user.getFollowings({where: { id : req.params.id }});
        if(follow && follow.length){
            await user.removeFollowing(parseInt(req.params.id, 10));
            console.log("팔로우 끊기");
        } else{
            await user.addFollowing(parseInt(req.params.id, 10));
           // await target_user.addFollower(parseInt(req.user.id, 10));

            console.log("팔로우 하기");
        }
        console.log(req.user.id);   //1
        console.log(req.params.id); //6

//        console.log(user.getFollowings(parseInt(req.user.id, 10)));
        //await user.removeFollowing(parseInt(req.params.id, 10));
        //console.log(test);

        res.send('success');
    } catch (error){
        console.error(error);
        next(error);
    }
});

router.post('/:id/like', isLoggedIn, async(req, res, next) => {
    try {
        const post = await Post.find({ where: { id: req.params.id } });
        const like = await post.getLiker({ where: { id: req.user.id }});
        
        if(like && like.length){
            console.log("removelike");
            await post.removeLiker(parseInt(req.user.id, 10));
        } else{
            console.log("addlike");
            await post.addLiker(parseInt(req.user.id, 10));
        }
        res.redirect('/');

    } catch (error){
        console.error(error);
        next(error);
    }
});

module.exports = router;
