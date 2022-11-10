const register = require("./register");
const login = require("./login");
const getUserById = require("./obtenerUser");
const createCard = require("./createCard");
const showCards = require("./showCards");
// const editCard = require("./editCard");
// const eliminateCard = require("./eliminateCard");

module.exports = {
  register,
  login,
  getUserById,
  createCard,
  showCards
  // eliminateCard,
  // editCard
};