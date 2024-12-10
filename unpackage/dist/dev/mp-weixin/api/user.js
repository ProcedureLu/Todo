"use strict";
const utils_request = require("../utils/request.js");
const login = async (username, password) => {
  const users = await utils_request.request("/users.json", "GET");
  return users.find((user) => user.username === username && user.password === password);
};
exports.login = login;
