module.exports = (req, res, next) => {
    console.log('Middleware local ativo');
    next();
}