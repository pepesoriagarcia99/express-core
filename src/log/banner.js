const fs = require('fs');

module.exports = function (serverData = {}) {
  fs.readFile('./banner.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
  
      console.log('\n');
  
      const aditionalData = Object.keys(serverData);
      aditionalData.forEach(key => {
        const keyName = key.charAt(0).toUpperCase() + key.slice(1);
        console.log(`${keyName}: ${serverData[key]}`);
      });
      console.log('\n');
    });
  };
  