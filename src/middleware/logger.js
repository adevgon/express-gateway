const logger = (req, res, next) => {
    console.log('middle ware invoked');
    next();
};

module.exports = logger;