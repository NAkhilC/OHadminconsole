const PropertiesReader = require("properties-reader");
var properties = PropertiesReader("application.properties");

/*gets property from path/to/app.properties
You can also export this function using module.exports*/
getProperty = (pty, type) => {
  return properties.get(pty);
};

module.exports = { getProperty };
