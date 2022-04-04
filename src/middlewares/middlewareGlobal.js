module.exports = (req, res, next) => {
    console.log('Middleware global ativo');
    next();
}