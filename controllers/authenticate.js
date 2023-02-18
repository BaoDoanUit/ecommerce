const { authenticate } = require('../services/gatewayservices')


exports.authenticate = (req, res) => {
    console.log(req.body);
    let user = req.body;
    return authenticate(user, res)
};