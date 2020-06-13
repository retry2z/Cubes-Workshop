const user = {
    isLogged: true,
};

module.exports = (app, route, data) => {
    app.use(route, (req, res, next) => {
        if (user.isLogged === data.isLogged) {
            return next()
        }

        return false
    });
}

