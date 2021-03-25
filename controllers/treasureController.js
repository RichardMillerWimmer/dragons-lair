const { decodeBase64 } = require("bcryptjs")

module.exports = {

    dragonTreasure: async (req, res, next) => {
        // const db = req.app.get('db');
        // const treasure = await db.get_dragon_treasure(1);
        const treasure = await req.app.get('db').get_dragon_treasure(1);
        return res.status(200).send(treasure);
    }
}