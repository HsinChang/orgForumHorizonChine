const User = require('../database/models/User')
 
module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if (error) {

            console.log(error);
            console.log(error.stack);
            return res.redirect('/auth/register');
        } else {
            res.redirect('/')
        }
    })
}