module.exports = {
    getThisBread: (req, res, next) => {
        const db = req.app.get('db');
        db.get_all_products().then(products => {
            res.status(200).send(products)
            .catch(err => {
                res.status(404).send(err)
            });
        });
    },
    
}