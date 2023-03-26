const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
      return next();
    }
    return res.redirect("/");
};
const isUserLoggedIn = (req, res, next) => {
    if (req.session.isAuth) {
      return res.redirect("/ext");
    }
    return next();
};

//exporting functions
const middlewareFuncs = {
    isAuth: isAuth,
    isUserLoggedIn: isUserLoggedIn,
};

module.exports = middlewareFuncs;