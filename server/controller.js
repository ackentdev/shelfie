module.exports = {
    getThisBread: (req, res, next) => {
        const db = req.app.get('db');
        db.get_all_products().then(products => {
            res.status(200).send(products)
        });
    },
    postThatShit: (req, res, next) => {
        const db = req.app.get('db');
        const {img, name, price} = req.body;
        db.post_product([img, name, price]).then(products => {
            res.status(200).send(products);
        });
    },
    deleteThatShit: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        console.log("check this out:", req.params);
        db.delete_product(id).then(() => {
            res.status(200);
        }).catch( err => {
            res.status(500).send({errorMessage: "I'm tired of these monkey figthin snakes on this monday to friday plane!"})
            console.log(err);
        });
    }

}