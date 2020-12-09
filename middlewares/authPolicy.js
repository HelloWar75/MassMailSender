module.exports = async (req, res, next) => {
    
    let token = null;
    
    try {
        token = req.headers.authorization.split(' ')[1];
    } catch (error) {
        return res.status(500).json({
            error: "Token not be null!"
        });
    }    

    if( token != "123" ) {
        return res.status(401).json({
            error: 'Token not authorized!'
        });
    }

    
    next();
    
}