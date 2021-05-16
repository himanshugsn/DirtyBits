const passport = require('passport')
const mongoose = require('mongoose')
const User = mongoose.model('users')
const requireLogin = require('../middleware/requireLogin')

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    
    app.get('/auth/google/callback', passport.authenticate('google'), (req, res)=> {
        res.redirect('/')
    })

    app.get('/api/logout', (req, res)=>{
        req.logout()
        res.redirect('/')
    })
    
    app.get('/api/current_user', (req, res)=>{
        res.send(req.user)
    })

    app.post('/api/update_user', requireLogin, async (req, res) => {
        const { score, problemId } = req.body;
        console.log('score value', score);
        console.log('reached');
        console.log('problem id is ', problemId);
        // const user = await User.findByIdAndUpdate(req.body.userId, {$set:{score:10,attempted : 1 }}, (err, db) => {
        //     if (err) throw err;
        //     console.log('1 document updated')
        // })
        // const newUser = await user.save()

        // if(!req.user.attemptedQuestions.includes(problemId)){
        //     const user = await User.findByIdAndUpdate(req.body.userId, {$push : {attemptedQuestions : problemId}})
        //     const updateUser = await user.save();
        //     res.status(203).send(updateUser)
        // }

        // res.status(200).send(newUser)

        try {
            if(score === 100 ) {
                // UPDATING THE ATTEMPTED QUESTION FIELD AND ARRAY
                if(!req.user.attemptedQuestions.includes(problemId)){
                    const user = await User.findByIdAndUpdate(req.body.userId, {$push : {attemptedQuestions : problemId}, $set:{attempted : req.user.attempted + 1}});
                    var updatedUser = await user.save();
                }
                if(!req.user.solvedQuestion.includes(problemId)){
                    const user = await User.findByIdAndUpdate(req.body.userId, {$push : {solvedQuestion : problemId}, $set: {problemsSolved:req.user.problemsSolved + 1}})
                    var updatedUser = await user.save();
                }

                res.status(200).json(updatedUser)

            } 
            if(score === 0 ) {
                // UPDATING THE ATTEMPTED QUESTION FIELD AND ARRAY
                if(!req.user.attemptedQuestions.includes(problemId)){
                    var user = await User.findByIdAndUpdate(req.body.userId, {$push : {attemptedQuestions : problemId}, $set:{attempted : req.user.attempted + 1}})
                    var updatedUser = await user.save();
                }
                if(!req.user.partiallySolvedQuestion.includes(problemId)){
                    var user = await User.findByIdAndUpdate(req.body.userId, {$push : {partiallySolvedQuestion : problemId}, $set : {partiallySolved : req.user.partiallySolved + 1}})
                    var updatedUser = await user.save();
                }
                // UPDATING THE PROBLEM SOLVED
                res.status(200).json(updatedUser)
            } 

            if(score > 0 && score < 100){
                if(!req.user.attemptedQuestions.includes(problemId)){
                    var user = await User.findByIdAndUpdate(req.body.userId, {$push : {attemptedQuestions : problemId}, $set:{attempted : req.user.attempted + 1}})
                    var updatedUser = await user.save();
                }
                if(!req.user.partiallySolvedQuestion.includes(problemId)){
                    var user = await User.findByIdAndUpdate(req.body.userId, {$push : {partiallySolvedQuestion : problemId}, $set : {partiallySolved : req.user.partiallySolved + 1}})
                    var updatedUser = await user.save();
                }
                res.status(200).json(updatedUser)
            }
        }catch(err) {
            res.json(err)
        }
        
    })
    
}
