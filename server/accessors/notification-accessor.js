const users = require("../constants/users");
const data = require("../constants/data");
const randomstring = require("randomstring");
const date = require("date-and-time");

const saveNotifications = (values, user) => {
  let foundExisting = data.findIndex((obj) => obj.id == values.id);
  let res = {};
  if (foundExisting >= 0) {
    values.modifiedBy = user.loginid;
    values.modifiedAt = new Date().toISOString();
    data[foundExisting] = values;
  } else {
    values.modifiedBy = user.loginid;
    values.modifiedAt = new Date().toISOString();
    values.createdBy = user.loginid;
    values.createdAt = new Date().toISOString();
    values.id = randomstring.generate(7);
    data.push(values);
  }

  res.data = data;
  res.status = 200;
  return res;
};

const deleteNotifications = (values, user) => {
  let foundExisting = data.findIndex((obj) => obj.id == values.id);
  let res = {};
  if (foundExisting >= 0) {
    data.splice(foundExisting, 1);
    res.data = data;
    res.status = 200;
    return res;
  } else {
    res.data = data;
    res.status = 400;
    return res;
  }
};

const getNotificationsForUser = (user) => {
  let accessLevel = user?.permission;
  let currentDate = date.format(new Date(), "YYYY-MM-DD");
  return data.filter((eachMessage) => {
    return (
      eachMessage.effectiveDate <= currentDate &&
      (eachMessage.targetUsers.match(accessLevel) || accessLevel.match(eachMessage.targetUsers))
    );
  });
};

const deleteExpiredNotifications = () => {
  let currentDate = date.format(new Date(), "YYYY-MM-DD");
  data.forEach((eachMessage, i) => {
    if (eachMessage.endDate < currentDate) {
      //Enterprise log for each deleted message
      data.splice(i, 1);
    }
  });
};

module.exports = { saveNotifications, deleteNotifications, getNotificationsForUser, deleteExpiredNotifications };
