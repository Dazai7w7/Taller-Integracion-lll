const card = require("../model/card")

const showCards = async (req, res) => {
    const show = await card.findOne();
    res.send(show);
};

module.exports = showCards