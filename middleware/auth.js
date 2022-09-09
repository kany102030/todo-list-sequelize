module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      console.log('authent success')
      return next()
    }
    console.log('authent fail')
    // req.flash('warning_msg', 'Please Login First!')
    res.redirect('/users/login')
  }
}