const User = require('../database/models/User')
 
module.exports = async (req, res) => {
    // ensure email not taken
    if (await User.findOne({ email: req.body.email })) {
        console.log(`Email ${req.body.email} is already taken`); // TODO: should throw this as error then let UI have it
        return res.redirect('/auth/register');
    }

    // then create
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