module.exports = (req, res, next) => {
    if (!req.body.username || !req.body.company || !req.body.job_title || !req.body.content) {
        return res.redirect('/new')
    }
 
    next()
}