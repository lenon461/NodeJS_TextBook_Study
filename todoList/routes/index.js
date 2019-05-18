const express = require('express');
const router = express.Router();

const Job = require('../schemas/job');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expxxress' });
});
router.get('/list', async (req, res, next) => {
    try{
        const jobs = await Job.find({}).sort('priority');
        res.render('main', {jobs,  title: 'Expxxress' });
    } catch (error){
        console.error(error);
        next(error);

    }
});
router.post('/job', async(req, res, next) => {
    try{
        if(!req.body.title || !req.body.contents){
            const e = new Error('제목과 내용을 입력해 주십시오');
            return next(e);
        }
        const job = new Job({
            title: req.body.title,
            contents: req.body.contents,
            deadline: req.body.deadline,
            complete: req.body.complete,
            priority: req.body.priority,
        });
        const newjob = await job.save();
        res.redirect(302, `/list`);
    } catch (error){
        console.error(error);
        next(error);
    }
});

router.put('/job/:id', async (req, res, next) => {
    try{
        const job = await Job.findOne({_id: req.params.id });
        if(!job){
            const e = new Error('존재하지 않는 포스트 입니다.');
            return next(e);
        }
        else if(!req.body.title || !req.body.contents || req.body.title == ""){
            const e = new Error('제목과 내용을 입력해 주십시오');
            console.log("#");
            return next(e);
        }
        var query = { _id: req.params.id };
            console.log("#2");
        
        console.log(req.body);
        await Job.findOneAndUpdate(query, 
            { 
                title : req.body.title,
                contents : req.body.contents,
                deadline : req.body.deadline,
                priority : req.body.priority,
            },
            { useFindAndModify : false }
        );
        res.send(404,"success");
       // res.redirect(302,`/list`);

    } catch (error) {
        console.error(error);
        next(error);
    }
});
router.put('/job/:id/complete', async (req, res, next) => {
    try{
        const job = await Job.findOne({_id: req.params.id });
        if(!job){
            const e = new Error('존재하지 않는 포스트 입니다.');
            return next(e);
        }
        const iscompleted = job.complete? 0:1
        var query = { _id: req.params.id };
        await Job.findOneAndUpdate(query, 
            { 
                complete : iscompleted
            },
            { useFindAndModify : false }
        );
        res.redirect(302, `/list`);

    } catch (error) {
        console.error(error);
        next(error);
    }
});
router.delete('/job/:id', async (req, res, next) => {
    try{
        await Job.deleteOne({_id: req.params.id });
        res.redirect(302, `/list`);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
