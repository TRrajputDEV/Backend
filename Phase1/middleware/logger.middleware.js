const requestTime = (req, res, next) =>{
    req.requestTime = new Date().toUTCString();
    next();
}
export default requestTime