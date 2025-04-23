module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === '1234') {
        next();
    } else {
        res.status(401).json({ error: 'Acces impossible!' });
    }
};