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
    
    app.get('/api/current_user', async(req, res)=>{
        // const users = await User.find({});
        // console.log(users.sort((a,b)=>a-b));
        res.send(req.user)
    })

    app.get('/api/leaderboard', requireLogin,  async(req, res) => {
        const users = await User.find({});
        console.log('before sort', users)
        users.sort(function(a, b) {
            var keyA = a.problemsSolved, keyB = b.problemsSolved;
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
        })
        console.log('after sort', users)
        console.log('my current id ', req.user._id)
        const getObj = users.find((x) => x.email === req.user.email)
        const rank = users.indexOf(getObj) + 1;
        req.user.rank = rank;
        const user = await req.user.save()
        res.json(users)
    })



    app.post('/api/update_user', requireLogin, async (req, res) => {
        const { score, problemId } = req.body;
        // console.log('score value', score);
        // console.log('reached');
        // console.log('problem id is ', problemId);
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
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();
                today = mm + '/' + dd + '/' + yyyy;
                // UPDATING THE ATTEMPTED QUESTION FIELD AND ARRAY
                if(!req.user.attemptedQuestions.includes(problemId)){
                    const user = await User.findByIdAndUpdate(req.body.userId, {$push : {attemptedQuestions : problemId}});
                    var updatedUser = await user.save();
                }
                if(!req.user.solvedQuestion.includes(problemId)){
                    const user = await User.findByIdAndUpdate(req.body.userId, {$push : {solvedQuestion : problemId}})
                    var updatedUser = await user.save();
                }
                if(req.user.partiallySolvedQuestion.includes(problemId)){
                    var user = await User.findByIdAndUpdate(req.body.userId, {$pull : {partiallySolvedQuestion : problemId}})
                    var updatedUser = await user.save();
                }
                if(req.user.timeSeriesGraphData.findIndex(item => item.key === today) < 0 ){
                    const user = await User.findByIdAndUpdate(req.body.userId, {$push : {timeSeriesGraphData : {
                        key:today,
                        data: 20
                    }}})
                    var updatedUser = await user.save()
                }else {

                    const user = await User.findByIdAndUpdate(req.body.userId, {$set : {timeSeriesGraphData : {
                        key : today,
                        // data : req.user.timeSeriesGraphData[1].data + 20
                        data : req.user.timeSeriesGraphData.map((item, index) => {
                            console.log(item.key === today)
                            req.user.timeSeriesGraphData[index].data = req.user.timeSeriesGraphData[index].data + 10
                            console.log(req.user.timeSeriesGraphData[index].data)
                            req.user.save()
                        }
                            // item.key === today && (req.user.timeSeriesGraphData[index].data + 10)
                        )
                    }}})
                    // console.log(req.user.timeSeriesGraphData[1].data)
                    var updatedUser = await user.save()
                }
                
                res.status(200).json(updatedUser)

            } 
            if(score === 0 ) {
                // UPDATING THE ATTEMPTED QUESTION FIELD AND ARRAY
                if(!req.user.attemptedQuestions.includes(problemId)){
                    var user = await User.findByIdAndUpdate(req.body.userId, {$push : {attemptedQuestions : problemId}})
                    var updatedUser = await user.save();
                }
                if(!req.user.partiallySolvedQuestion.includes(problemId) && !req.user.solvedQuestion.includes(problemId)){
                        var user = await User.findByIdAndUpdate(req.body.userId, {$push : {partiallySolvedQuestion : problemId}})
                        var updatedUser = await user.save();             
                }
                // UPDATING THE PROBLEM SOLVED
                res.status(200).json(updatedUser)
            } 

            if(score > 0 && score < 100){
                console.log('half score reached');
                if(!req.user.attemptedQuestions.includes(problemId)){
                    var user = await User.findByIdAndUpdate(req.body.userId, {$push : {attemptedQuestions : problemId}})
                    var updatedUser = await user.save();
                }
                if(!req.user.partiallySolvedQuestion.includes(problemId) && !req.user.solvedQuestion.includes(problemId)){
                    var user = await User.findByIdAndUpdate(req.body.userId, {$push : {partiallySolvedQuestion : problemId}})
                    var updatedUser = await user.save();             
            }
                res.status(200).json(updatedUser)
            }
        }catch(err) {
            res.json(err)
        }
    })
    
}
