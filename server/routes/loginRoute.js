const users = require("../constants/users");

const postHandler = (values) => {
  return users.filter((obj) => obj.loginid === values.loginId);
};

module.exports = { postHandler };
