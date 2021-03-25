const { decodeBase64 } = require("bcryptjs")

module.exports = {

    dragonTreasure: async (req, res, next) => {
        // const db = req.app.get('db');
        // const treasure = await db.get_dragon_treasure(1);
        const treasure = await req.app.get('db').get_dragon_treasure(1);
        return res.status(200).send(treasure);
    },

    getUserTreasure: async (req, res, next) => {
        // const db = req.app.get('db');
        // const { id } = req.body;
        // const userTreasure = await db.get_user_treasure(id);

        const userTreasure = await req.app.get('db').get_user_treasure([req.session.user.id])
        return res.status(200).send(userTreasure)
    },

    addUserTreasure: async (req, res, next) => {
        const { treasureURL } = req.body;
        const { id } = req.session.user;

        const userTreasure = await req.app.get('db').add_user_treasure([treasureURL, id])
        return res.status(200).send(userTreasure)
    },

    getAllTreasure: async (req, res, next) => {
        const allTreasure = await req.app.get('db').get_all_treasure()
        // console.log(res.status)
        return res.status(200).send(allTreasure);
    }
}